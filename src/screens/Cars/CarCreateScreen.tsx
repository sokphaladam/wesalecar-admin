import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { DataCarEdtorType, CarEditor } from "./components/CarEditor";
import { obj } from './libs/MapDataToField';
import { FirebaseHook } from "../../hook/FirebaseHook";
import { Loading } from "../../components/Loading";

const path = window.location.pathname.split("/")[1];

export function CarCreateScreen() {
  const firebase = useFirebase();
  const history = useHistory();
  const [submited, setSubmited] = useState(false);

  const [data, setData] = useState<DataCarEdtorType>({
    sub: obj,
    images: []
  });

  const onSubmit = async () => {
    if(data.title === "" || data.title === undefined) return alert('title is empty');
    if(data.images?.length === 0) return alert('image is empty');
    if(data.price === 0 || data.price === undefined) return alert('image is empty');

    const con = window.confirm('Are you sure want to save?');

    if(con){
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

      await firebase.firestore().collection("cars").doc().set({...data, published: true});
      history.push(
        path === "wesalecar-admin" ? "/wesalecar-admin/cars" : "/cars"
      );
    }
  }

  if(submited) return <Loading label="Save Data..."/>

  return (
    <CarEditor
      data={data}
      onChange={data => setData(data)}
      onSubmit={onSubmit}
    />
  );
}
