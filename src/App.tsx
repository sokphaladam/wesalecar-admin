/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { RouteIndex } from './routes';
import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { LoginScreen } from './screens/LoginScreen';
import { LoadScreen } from './screens/LoadScreen';
import { User } from 'firebase';

const mapStateToProps = (state: any) => {
  return state;
}

function App(props: any) {
  const firebase = useFirebase();
  const auth = firebase.auth();
  const [isAuth, setAuth] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    verifyUser(auth.currentUser);

    setTimeout(()=>{
      setLoad(false);
    }, 3000);
  }, [auth.currentUser]);

  const verifyUser = async (user: User | null) => {

    if(user) {
      const snap = await firebase.firestore().collection('users').doc(user!.uid).get();

      if(snap.data() === undefined) {
        auth.signOut();
        sessionStorage.removeItem('users');

        const local = localStorage.getItem('user')!;

        if(local !== null) {
          const x = await firebase.login({
            email: JSON.parse(local).email,
            password: JSON.parse(local).password
          })
          sessionStorage.setItem('users', JSON.stringify(x.user));
        }
      }

      if(snap.data()!.role === 'admin') {
        sessionStorage.setItem('user', JSON.stringify(user));
        setAuth(true);
      }
      else{
        alert('permission denied')
        firebase.logout();
        setAuth(false);
      }
    }
  }

  if(load) return <LoadScreen/>

  if(!isAuth) return <LoginScreen/>

  return (
    <BrowserRouter basename="wesalecar-admin">
      <div className="page-container">
        <SideMenu/>
        <RouteIndex/>
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
