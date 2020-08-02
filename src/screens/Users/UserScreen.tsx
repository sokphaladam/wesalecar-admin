import React, { useEffect, useState } from 'react';
import { Content } from '../../components/Content';
import { isEmpty } from 'react-redux-firebase';
import firebase from '../../libs/Firebase';
import { Link } from 'react-router-dom';

const path = window.location.pathname.split('/')[1];

export function UserScreen() {
  const [data, loadData] = useState([]);

  useEffect(() => {
    if (isEmpty(data)) {
      DocumentUsers().then(res => loadData(res));
    }
  })

  return (
    <Content>
      <div className="ui small">
        <Link to={path === 'wesalecar-admin' ? "/wesalecar-admin/users/create" : "/users/create"} className="ui button black">
          Create New User
        </Link>
        <br />
        <table className="ui celled table padded blue">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Provider</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x: any) => {
                return (
                  <tr>
                    <td>{x.username}</td>
                    <td>{x.email}</td>
                    <td>{x.role}</td>
                    <td>{x.providerId}</td>
                    <td>
                      <Link to={path === 'wesalecar-admin' ? '/wesalecar-admin/users/edit/' + x.id : '/users/edit/' + x.id} className="ui button blue">
                        Edit
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={4} className="right aligned">
                Admin {data.filter((x: any) => x.role === 'admin').length}
              </th>
              <th className="right aligned">
                Guest{" "}
                {data.filter((x: any) => x.role === 'guest').length}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Content>
  )
}

async function DocumentUsers() {
  const items: any = [];
  const doc = await firebase.firestore().collection('users').get();

  doc.forEach(x => {
    items.push({
      ...x.data(),
      id: x.id
    })
  })

  return items;
}