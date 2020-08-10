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

  return (
    <Content>
      <div className="row">
        <div className="col-md-12">
          <TabComponent selectDefault={0}>
            <TabContentComponent
              index={0}
              name="Vehicle Information"
              hash="infor"
            >
              <VehicleInformation/>
            </TabContentComponent>
            <TabContentComponent index={1} name="Mirrors" hash="mirror">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Lights" hash="light">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Heat/AC" hash="ac">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Carpet, Trim And Mats"
              hash="mats"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Luggage Compartment"
              hash="luggage"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive Sensors"
              hash="test"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Eletrical System" hash="ele">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Tires And Wheel" hash="tires">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={0} name="Car Body" hash="body">
              <div>Hello World 0</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Check of Doors" hash="doors">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Audio Entertainment"
              hash="audio"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Interior Amenities"
              hash="interior"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Seats" hash="seats">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive General"
              hash="general"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Engine" hash="engine">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Transmission"
              hash="transmission"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Brakes" hash="brakes">
              <div>Hello World 1</div>
            </TabContentComponent>
          </TabComponent>
        </div>
      </div>
    </Content>
  );
}
