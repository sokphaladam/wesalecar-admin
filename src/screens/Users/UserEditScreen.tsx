import React, { useState, useEffect } from "react";
import { Content } from "../../components/Content";
import { useFirebase } from "react-redux-firebase";
import { useHistory, useRouteMatch } from "react-router-dom";

const path = window.location.pathname.split('/')[1];

let username: HTMLInputElement | null = null;
let email: HTMLInputElement | null = null;
let password: HTMLInputElement | null = null;
let role: HTMLSelectElement | null = null;

export function UserEditScreen() {
  const firebase = useFirebase();
  const history = useHistory();
  const match = useRouteMatch();
  const [data, loadData] = useState<any>({});
  const [load, setLoad] = useState(true);

  const Onsubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = {
        username: username!.value,
        email: email!.value,
        password: password!.value,
        role: role!.value
      }

      await firebase.firestore().collection('users').doc((match.params as any).id).update(data);
      history.push(path === 'wesalecar-admin'? '/wesalecar-admin/users': '/users');
    }
    catch(err){
      alert(err.message);
    }
  }

  const LoadData = async () => {
    const snap = await firebase.firestore().collection('users').doc((match.params as any).id).get();
    loadData({
      ...snap.data(),
      id: snap.id
    })
  }

  useEffect(() => {
    if(load){
      LoadData();
      setLoad(false)
    }
  })

  return (
    <Content>
      <div className="ui small">
        <div className="row">
          <div className="col-md-4">
            <form className="ui form" onSubmit={Onsubmit}>
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  placeholder=""
                  required
                  ref={(ref) => (username = ref)}
                  defaultValue={data.username}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder=""
                  required
                  disabled={true}
                  ref={(ref) => (email = ref)}
                  defaultValue={data.email}
                />
              </div>
              <div className="field">
                <label>Role</label>
                <select ref={(ref) => (role = ref)}>
                  <option value="admin">Admin</option>
                  <option value="guest">Guest</option>
                </select>
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder=""
                  required
                  ref={(ref) => (password = ref)}
                  defaultValue={data.password}
                  disabled
                />
              </div>
              <button className="ui button blue" type="submit">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Content>
  );
}
