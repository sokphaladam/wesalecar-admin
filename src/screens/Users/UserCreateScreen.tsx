import React from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const path = window.location.pathname.split('/')[1];

let username: HTMLInputElement | null = null;
let email: HTMLInputElement | null = null;
let password: HTMLInputElement | null = null;
let role: HTMLSelectElement | null = null;

export function UserCreateScreen(){
  const firebase = useFirebase();
  const history = useHistory();

  const Onsubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = {
        username: username!.value,
        email: email!.value,
        password: password!.value,
        role: role!.value
      }

      const auth = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);

      if(auth.user){
        await firebase.firestore().collection('users').doc(auth.user.uid).set({...data, providerId: auth.user.providerId});
      }

      firebase.logout();

      const local = localStorage.getItem('user')!;

      if(local !== null) {
        const x = await firebase.login({
          email: JSON.parse(local).email,
          password: JSON.parse(local).password
        })

        sessionStorage.setItem('users', JSON.stringify(x.user));
      }

      history.push(path === 'wesalecar-admin'? '/wesalecar-admin/users': '/users');
    }
    catch(err){
      alert(err.message);
    }
  }

  return(
    <Content>
      <div className="ui small">
        <div className="row">
          <div className="col-md-4">
            <form className="ui form" onSubmit={Onsubmit}>
              <div className="field">
                <label>Username</label>
                <input type="text" placeholder="" required ref={ref => username = ref}/>
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="" required ref={ref => email = ref}/>
              </div>
              <div className="field">
                <label>Role</label>
                <select ref={ref => role = ref}>
                  <option value="admin">Admin</option>
                  <option value="guest">Guest</option>
                </select>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" placeholder="" required ref={ref => password = ref}/>
              </div>
              <button className="ui button blue" type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </Content>
  )
}