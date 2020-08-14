import { ExtendedFirebaseInstance } from "react-redux-firebase";

export class FirebaseHook {
  firebase: ExtendedFirebaseInstance;

  constructor(firebase: ExtendedFirebaseInstance) {
    this.firebase = firebase;
  }

  async insertYear(val: any) {
    const year = await this.firebase
      .firestore()
      .collection("years")
      .where("year", "==", val)
      .get();

    if (year.empty) {
      await this.firebase.firestore().collection("years").doc().set({
        year: val,
        created: Date.now(),
      });
    }
  }

  async insertMake(val: any) {
    const make = await this.firebase
      .firestore()
      .collection("makes")
      .where("name", "==", val)
      .get();

    if (make.empty) {
      await this.firebase.firestore().collection("makes").doc().set({
        name: val,
        created: Date.now(),
      });
    }
  }

  async insertModel(val: any, make: any) {
    const model = await this.firebase
      .firestore()
      .collection("models")
      .where("model", "==", val)
      .where("makes", "==", make)
      .get();

    if (model.empty) {
      await this.firebase.firestore().collection("models").doc().set({
        model: val,
        makes: make,
        created: Date.now(),
      });
    }
  }

  async insertMaximumMileage(val: any) {
    const odometer = await this.firebase
      .firestore()
      .collection("odometer")
      .where("max", "==", val)
      .get();

    if (odometer.empty) {
      await this.firebase.firestore().collection("odometer").doc().set({
        max: val,
        created: Date.now(),
      });
    }
  }

  async insertBodyType(val: any) {
    const body = await this.firebase
      .firestore()
      .collection("body")
      .where("body", "==", val)
      .get();

    if (body.empty) {
      await this.firebase.firestore().collection("body").doc().set({
        body: val,
        created: Date.now(),
      });
    }
  }

  async insertSpecs(val: any) {
    const body = await this.firebase
      .firestore()
      .collection("specs")
      .where("spec", "==", val)
      .get();

    if (body.empty) {
      await this.firebase.firestore().collection("specs").doc().set({
        spec: val,
        created: Date.now(),
      });
    }
  }

  async insertService(val: any) {
    const body = await this.firebase
      .firestore()
      .collection("service_history")
      .where("service_history", "==", val)
      .get();

    if (body.empty) {
      await this.firebase.firestore().collection("service_history").doc().set({
        service_history: val,
        created: Date.now(),
      });
    }
  }

  async insertColor(val: any) {
    const body = await this.firebase
      .firestore()
      .collection("colors")
      .where("color", "==", val)
      .get();

    if (body.empty) {
      await this.firebase.firestore().collection("colors").doc().set({
        color: val,
        created: Date.now(),
      });
    }
  }
}
