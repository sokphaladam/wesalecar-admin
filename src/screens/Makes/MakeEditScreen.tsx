import React, { useEffect, useState } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useHistory, useRouteMatch } from 'react-router-dom';

export function MakeEditScreen() {
  let make: HTMLInputElement | null = null;
  const firebase = useFirebase();
  const history = useHistory();
  const match = useRouteMatch();
  const [ name, setName ] = useState('');

  const handleEdit = async (e: any) => {
    e.preventDefault();
    await firebase.firestore().collection('makes').doc((match.params as any).id).update({
      name: make!.value
    });
    history.push('/makes');
  }

  useEffect(() => {
    getMake()
  })

  const getMake = async () => {
    const snap = await firebase.firestore().collection('makes').doc((match.params as any).id).get();
    setName(snap.data()!.name);
  }

  return (
    <Content>
      <div className="row">
        <div className="col-md-3">
          <form className="ui form" onSubmit={handleEdit}>
            <div className="field">
              <label>Make Name</label>
              <input type="text" placeholder="Enter makes name..." ref={ref => make = ref} defaultValue={name} required/>
            </div>
            <button className="ui button blue">update</button>
          </form>
        </div>
      </div>
    </Content>
  )
}