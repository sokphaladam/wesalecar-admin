import React, { useEffect, useState } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import moment from 'moment';

const path = window.location.pathname.split('/')[1];

export function BookScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    LoadData();
  })

  const LoadData = async () => {
    const doc = await firebase.firestore().collection('book').orderBy('created', 'desc').get();
    const books: any = [];
    await doc.forEach(snap => {
      books.push({
        id: snap.id,
        ...snap.data()
      })
    })
    setData(books);
  }

  return (
    <Content>
      <div className="ui small">
        <table className="ui celled table padded blue">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Car Booking</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x: any) => {
                return (
                  <tr key={x.id}>
                    <td>
                      <small>{x.email}</small>
                      <br />
                      <small>{x.phone}</small>
                    </td>
                    <td>
                      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <img className="ui middle aligned tiny image" src={x.car.image} alt="" style={{ marginRight: 10 }} />
                        <span>
                          <small>{x.car.title}</small>
                          <br />
                          <small className="ui green text">{new Intl.NumberFormat().format(Number(x.car.price))} USD</small>
                        </span>
                      </div>
                    </td>
                    <td>
                      {moment(new Date(x.created.seconds * 1000)).format('MMM DD, YYYY HH:mm:ss')}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Content>
  )
}