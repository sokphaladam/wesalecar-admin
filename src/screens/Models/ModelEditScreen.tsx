import React, { useEffect, useState } from 'react';
import { Content } from '../../components/Content';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

export function ModelEditScreen(){
  let model: HTMLInputElement | null = null;
  let makes: HTMLSelectElement | null = null;
  const firebase = useFirebase();
  const history = useHistory();
  const match = useRouteMatch();
  const [data, setData] = useState([]);
  const [snap, setSnap] = useState<any>({});

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

  const getModel = async () => {
    const snap = await firebase.firestore().collection('models').doc((match.params as any).id).get();
    setSnap({
      ...snap.data(),
      id: snap.id
    })
  }

  useEffect(() => {
    getMakeList();
    getModel();
  })

  const handleCrate = async (e: any) => {
    e.preventDefault();
    await firebase.firestore().collection('models').doc((match.params as any).id).update({
      model: model!.value,
      makes: makes!.value
    });

    history.push('/models');
  }
  
  return(
    <Content>
      <div className="row">
        <div className="col-md-4">
          <form className="ui form" onSubmit={handleCrate}>
            <div className="field">
              <label>Model Name</label>
              <input type="text" placeholder="Enter model name..." required ref={ref => model = ref} defaultValue={snap.model!}/>
            </div>
            <div className="field">
              <label>Makes</label>
              <select ref={ref => makes = ref}>
                {
                  data.map((x:any) => {
                    return <option value={x.name} key={x.id} selected={snap.makes === x.name}>{x.name}</option>
                  })
                }
              </select>
            </div>
            <button className="ui button blue">Update</button>
          </form>
        </div>
      </div>
    </Content>
  )
}