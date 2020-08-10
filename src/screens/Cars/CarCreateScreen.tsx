import React, { useState } from "react";
import { Content } from "../../components/Content";
import { Link, useHistory } from "react-router-dom";
import { InformationTab } from "./Tab/InformationTab";
import { OverviewTab } from "./Tab/OverviewTab";
import { FeatureTab } from "./Tab/FeatureTab";
import { VechicleTab } from "./Tab/VechicleTab";
import {
  BasicInformationType,
  OverviewType,
  FeatureType,
  VechicleType,
} from "../../libs/DataType";
import { isEmpty, useFirebase } from "react-redux-firebase";
import { TabComponent } from "../../components/TabComponent";
import { TabContentComponent } from "../../components/TabContentComponent";
import { VehicleInformation } from "./components/VehicleInformation";
import { Mirror } from "./components/Mirror";
import { Light } from "./components/Light";
import { VehicleInformationType, MirrorType } from "./libs/FieldType";
import { CarEditScreen } from "./CarEditScreen";
import { DataCarEdtorType, CarEditor } from "./components/CarEditor";

const path = window.location.pathname.split("/")[1];

export function CarCreateScreen() {
  const firebase = useFirebase();
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const [information, setInformation] = useState<BasicInformationType>({});
  const [overview, setOverview] = useState<OverviewType>({});
  const [feature, setFeature] = useState<FeatureType>({});
  const [vechicle, setVechicle] = useState<VechicleType>({});

  const handleNext = async (
    data: any,
    type: "information" | "overview" | "feature" | "vechicle"
  ) => {
    if (type === "information") {
      setInformation(data);
      setIndex(1);
    } else if (type === "overview") {
      setOverview(data);
      setIndex(2);
    } else if (type === "feature") {
      setFeature(data);
      setIndex(3);
    } else {
      const data = {
        ...information,
        ...overview,
        ...feature,
        ...vechicle,
        published: true,
        created: Date.now(),
      };

      const year = await firebase
        .firestore()
        .collection("years")
        .where("year", "==", information.year)
        .get();

      if (year.empty) {
        await firebase.firestore().collection("years").doc().set({
          year: information.year,
          created: Date.now(),
        });
      }

      await firebase.firestore().collection("cars").doc().set(data);
      history.push(
        path === "wesalecar-admin" ? "/wesalecar-admin/cars" : "/cars"
      );
    }
  };

  const handleChange = (
    data: any,
    type: "information" | "overview" | "feature" | "vechicle"
  ) => {
    if (type === "information") {
      setInformation(data);
    } else if (type === "overview") {
      setOverview(data);
    } else if (type === "feature") {
      setFeature(data);
    } else {
      setVechicle(data);
    }
  };

  const [data, setData] = useState<DataCarEdtorType>({
    sub: {
      mirror: {
        sunroof: "",
        windshield: ""
      },
      light: {
        back_end_exterior_light: "",
        front_end_exterior_light: "",
        hazard_light: "",
        side_exterior_left: "",
        side_exterior_right: ""
      },
      heat: {
        air_conditioning_system: "",
        heating_system: ""
      },
      carpat: {
        door_trim_and_door_planel: "",
        headliner: ""
      },
      luggage: {
        vehicle_jack_tool_kit_wheel_spanner: ""
      },
    }
  });

  console.log(data)

  return (
    <CarEditor
      data={data}
      onChange={data => setData(data)}
    />
  );
}
