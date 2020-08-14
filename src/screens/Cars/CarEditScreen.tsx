import React, { useState, useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { DataCarEdtorType, CarEditor } from './components/CarEditor';
import { FirebaseHook } from '../../hook/FirebaseHook';
import { Loading } from '../../components/Loading';

const path = window.location.pathname.split('/')[1];

export function CarEditScreen() {
  const firebase = useFirebase();
  const history = useHistory();
  const match: any = useRouteMatch();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<DataCarEdtorType>({});
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (load) {
      getCar();
    }
  })

  const getCar = async () => {
    const snap = await firebase.firestore().collection('cars').doc(match.params.id).get();
    const val = snap.data()!;
    setData(val);
    await setLoad(false);
  }

  const onSubmit = async () => {
    if (data.title === "" || data.title === undefined) return alert('title is empty');
    if (data.images?.length === 0) return alert('image is empty');
    if (data.price === 0 || data.price === undefined) return alert('image is empty');

    const con = window.confirm('Are you sure want to save?');

    if (con) {
      setSubmited(true);
      const firebaseHook = new FirebaseHook(firebase);
      await firebaseHook.insertYear(data.year);
      await firebaseHook.insertMake(data.make?.toLowerCase());
      await firebaseHook.insertModel(data.model?.toLowerCase(), data.make?.toLowerCase());
      await firebaseHook.insertMaximumMileage(data.odometer_reading?.toLowerCase());
      await firebaseHook.insertBodyType(data.body?.toLowerCase());
      await firebaseHook.insertSpecs(data.specs?.toLowerCase());
      await firebaseHook.insertService(data.service_history!.toLowerCase());
      await firebaseHook.insertColor(data.car_color?.toLowerCase());

      await firebase.firestore().collection('cars').doc(match.params.id).update(data);
      history.push(
        path === "wesalecar-admin" ? "/wesalecar-admin/cars" : "/cars"
      );
    }
  }

  if(load) return <Loading label="Load Data..."/>

  if(submited) return <Loading label="Save Data..."/>

  return (
    <CarEditor
      data={data}
      onChange={data => setData(data)}
      onSubmit={onSubmit}
    />
  )
}