import React, { useState, useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { DataCarEdtorType, CarEditor } from './components/CarEditor';

const path = window.location.pathname.split('/')[1];

export function CarEditScreen() {
  const firebase = useFirebase();
  const history = useHistory();
  const match: any = useRouteMatch();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<DataCarEdtorType>({});

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
      await insertYear(data.year);
      await insertMake(data.make?.toLowerCase());
      await insertModel(data.model?.toLowerCase(), data.make?.toLowerCase());

      await firebase.firestore().collection('cars').doc(match.params.id).update(data);
      history.push(
        path === "wesalecar-admin" ? "/wesalecar-admin/cars" : "/cars"
      );
    }
  }

  const insertYear = async (val: any) => {
    const year = await firebase
      .firestore()
      .collection("years")
      .where("year", "==", val)
      .get();

    if (year.empty) {
      await firebase.firestore().collection("years").doc().set({
        year: val,
        created: Date.now(),
      });
    }
  }

  const insertMake = async (val: any) => {
    const make = await firebase
      .firestore()
      .collection("makes")
      .where("name", "==", val)
      .get();

    if (make.empty) {
      await firebase.firestore().collection("makes").doc().set({
        name: val,
        created: Date.now(),
      });
    }
  }

  const insertModel = async (val: any, make: any) => {
    const model = await firebase
      .firestore()
      .collection("models")
      .where("model", "==", val)
      .where("makes", "==", make)
      .get();

    if (model.empty) {
      await firebase.firestore().collection("models").doc().set({
        model: val,
        makes: make,
        created: Date.now(),
      });
    }
  }

  if(load) return <div>Load Data...</div>

  return (
    <CarEditor
      data={data}
      onChange={data => setData(data)}
      onSubmit={onSubmit}
    />
  )
}