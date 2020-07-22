import firebase from '../Firebase';

export async function CreateNewCar(data: any){
  await firebase.firestore().collection('cars').doc().set(data);
  
}