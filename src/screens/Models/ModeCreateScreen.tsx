import React, { useState, useEffect } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const path = window.location.pathname.split('/')[1];

export function ModelCreatScreen(){
  let model: HTMLInputElement | null = null;
  let makes: HTMLSelectElement | null = null;
  const firebase = useFirebase();
  const history = useHistory();
  const [data, setData] = useState([]);

  const getMakeList = async () => {
    const snap = await firebase.firestore().collection('makes').get();
    const items: any = [];
    snap.forEach(x => {
      items.push({
        ...x.data(),
        id: x.id
      })
    })
    setData(items);
  }

  useEffect(() => {
    getMakeList();
  })

  const handleCrate = async (e: any) => {
    e.preventDefault();
    await firebase.firestore().collection('models').doc().set({
      model: model!.value,
      makes: makes!.value,
      created: Date.now()
    });

    history.push(path === 'wesalecar-admin'?'/wesalecar-admin/models':'/models');
  }

  return(
    <Content>
      <div className="row">
        <div className="col-md-4">
          <form className="ui form" onSubmit={handleCrate}>
            <div className="field">
              <label>Model Name</label>
              <input type="text" placeholder="Enter model name..." required ref={ref => model = ref}/>
            </div>
            <div className="field">
              <label>Makes</label>
              <select ref={ref => makes = ref}>
                {
                  data.map((x:any) => {
                    return <option value={x.name} key={x.id}>{x.name}</option>
                  })
                }
              </select>
            </div>
            <button className="ui button blue">Create</button>
          </form>
        </div>
      </div>
    </Content>
  )
}