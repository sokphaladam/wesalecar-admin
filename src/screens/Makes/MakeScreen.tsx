import { Content } from "../../components/Content";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import moment from "moment";

const path = window.location.pathname.split("/")[1];

export function MakeScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);

  const getMakeList = async () => {
    const snap = await firebase.firestore().collection("makes").get();
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
    getMakeList();
  });

  return (
    <Content>
      <div className="ui">
        <div className="row">
          <div className="col-md-12">
            <Link
              to={
                path === "wesalecar-admin"
                  ? "/wesalecar-admin/makes/create"
                  : "/makes/create"
              }
              className="ui button black"
            >
              Create New Makes
            </Link>
            <br />
            <br />
          </div>
          <div className="col-md-4">
            <div
              className="ui inverted segment"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="ui inverted relaxed divided large list">
                {data.map((x: any) => {
                  return (
                    <div
                      className="item"
                      style={{ borderColor: "rgba(0,0,0,0.3)" }}
                    >
                      <div className="right floated content">
                        <Link
                          to={
                            path === "wesalecar-admin"
                              ? "/wesalecar-admin/makes/edit/" + x.id
                              : "/makes/edit/" + x.id
                          }
                          className="ui button blue"
                        >
                          Edit
                        </Link>
                        <button
                          className="ui button red"
                          onClick={() =>
                            firebase
                              .firestore()
                              .collection("makes")
                              .doc(x.id)
                              .delete()
                          }
                        >
                          Delete
                        </button>
                      </div>
                      <div className="content" style={{ color: "#666" }}>
                        <div className="header" style={{ color: "#333" }}>
                          {x.name!}
                        </div>
                        {moment(new Date(x.created)).format("MMM DD,YYYY")}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}
