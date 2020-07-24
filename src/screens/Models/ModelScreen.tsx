import React, { useState, useEffect } from "react";
import { Content } from "../../components/Content";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import moment from "moment";

const path = window.location.pathname.split("/")[1];

export function ModelScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);

  const getModel = async () => {
    const snap = await firebase.firestore().collection("models").get();
    const items: any = [];
    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setData(items);
  };

  useEffect(() => {
    getModel();
  });

  return (
    <Content>
      <div className="ui small">
        <Link
          to={
            path === "wesalecar-admin"
              ? "/wesalecar-admin/models/create"
              : "/models/create"
          }
          className="ui button black"
        >
          Create New Models
        </Link>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <table className="ui celled table padded blue">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Makes</th>
                  <th>Create Date</th>
                  <th className="right aligned">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((x: any) => {
                  return (
                    <tr key={x.id}>
                      <td>{x.model}</td>
                      <td>{x.makes}</td>
                      <td>
                        {moment(new Date(x.created)).format("MMM DD,YYYY")}
                      </td>
                      <td className="right aligned">
                        <Link
                          to={
                            path === "wesalecar-admin"
                              ? "/wesalecar-admin/models/edit" + x.id
                              : "/models/edit/" + x.id
                          }
                          className="ui button blue"
                        >
                          Edit
                        </Link>
                        <Link
                          to="#"
                          className="ui button red"
                          onClick={() =>
                            firebase
                              .firestore()
                              .collection("models")
                              .doc(x.id)
                              .delete()
                          }
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Content>
  );
}
