import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { DataCarEdtorType, CarEditor } from "./components/CarEditor";
import { obj } from './libs/MapDataToField';

const path = window.location.pathname.split("/")[1];

export function CarCreateScreen() {
  const firebase = useFirebase();
  const history = useHistory();


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
      await insertYear(data.year);
      await insertMake(data.make?.toLowerCase());
      await insertModel(data.model?.toLowerCase(), data.make?.toLowerCase());

      await firebase.firestore().collection("cars").doc().set({...data, published: true});
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

  console.log(data)

  return (
    <CarEditor
      data={data}
      onChange={data => setData(data)}
      onSubmit={onSubmit}
    />
  );
}
