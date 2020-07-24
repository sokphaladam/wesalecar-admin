import React from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const path = window.location.pathname.split('/')[1];

export function MakeCreateScreen() {
  let make: HTMLInputElement | null = null;
  const firebase = useFirebase();
  const history = useHistory();

  const handleCreate = async (e: any) => {
    e.preventDefault();
    await firebase.firestore().collection('makes').doc().set({
      name: make!.value,
      created: Date.now()
    });
    history.push(path === 'wesalecar-admin' ? '/wesalecar-admin/makes':'/makes');
  }

  return (
    <Content>
      <div className="row">
        <div className="col-md-3">
          <form className="ui form" onSubmit={handleCreate}>
            <div className="field">
              <label>Make Name</label>
              <input type="text" placeholder="Enter makes name..." ref={ref => make = ref} required/>
            </div>
            <button className="ui button blue">create</button>
          </form>
        </div>
      </div>
    </Content>
  )
}