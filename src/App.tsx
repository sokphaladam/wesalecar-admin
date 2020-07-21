import React, { useEffect, useState } from 'react';
import { SideMenu } from './components/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { RouteIndex } from './routes';
import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { LoginScreen } from './screens/LoginScreen';

const mapStateToProps = (state: any) => {
  return state;
}

function App(props: any) {
  const firebase = useFirebase().auth();
  const [isAuth, setAuth] = useState(false);

  useEffect(()=>{
    const user = firebase.currentUser;

    if(user){
      sessionStorage.setItem('user', JSON.stringify(user));
      setAuth(true);
    }
    else{
      setAuth(false);
    }
  }, [firebase.currentUser]);

  if(!isAuth) return <LoginScreen/>

  return (
    <BrowserRouter>
      <div className="page-container">
        <SideMenu/>
        <RouteIndex/>
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
