import firebase from '../../Firebase';

export function ListUserAction(){
  const users: any[] = [];
 
  const getUserList = async () => {
    const res = await firebase.firestore().collection('users').get();
    res.forEach(snap => {
      users.push({
        ...snap.data(),
        id: snap.id
      })  
    })
  }

  getUserList();

  return {
    type: '@USERLIST',
    users
  }
}