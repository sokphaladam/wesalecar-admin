import React, { useEffect, useState } from "react";
import { Content } from "../../components/Content";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const path = window.location.pathname.split('/')[1];

export function CarScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);
  const [models, setModels] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getCarList();
    if(load){
      getModelList();
      setLoad(false);
    }
  });

  const getCarList = async () => {
    const res = await firebase.firestore().collection("cars").get();
    const items: any = [];
    res.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setData(items);
  };

  const getModelList = async () => {
    const res = await firebase.firestore().collection("models").get();
    const items: any = [];
    res.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setModels(items);
  };

  return (
    <Content>
      <div className="ui small">
        <Link to={path === 'wesalecar-admin' ? "/wesalecar-admin/cars/create": "/cars/create"} className="ui button black">
          Create New Car
        </Link>
        <br />
        <table className="ui celled table padded blue">
          <thead>
            <tr>
              <th className="center aligned">Publish</th>
              <th>Title</th>
              <th>Price</th>
              <th>Type</th>
              <th>Year</th>
              <th>Image</th>
              <th className="center aligned">Model | Makes</th>
              <th className="center aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x: any) => {
              let refInput: HTMLInputElement | null;
              return (
                <tr key={x.id}>
                  <td className="center aligned">
                    <div className="ui fitted slider checkbox">
                      <input
                        type="checkbox"
                        defaultChecked={x.published}
                        ref={(ref) => (refInput = ref)}
                        onChange={() => {
                          firebase
                            .firestore()
                            .collection("cars")
                            .doc(x.id)
                            .update({ published: refInput!.checked });
                        }}
                      />
                      <label></label>
                    </div>
                  </td>
                  <td className="single line">{x.title}</td>
                  <td className="ui green text">
                    {new Intl.NumberFormat().format(Number(x.price))} USD
                  </td>
                  <td>{x.type}</td>
                  <td>{x.year}</td>
                  <td>
                    <h4 className="ui image header" style={{ display: "flex" }}>
                      {x.image.map((y: any, j: number) => {
                        return (
                          <img
                            src={y}
                            alt=""
                            className="ui mini rounded image"
                            style={{
                              marginRight: 3,
                              height: 30,
                              width: 30,
                            }}
                            key={j}
                          />
                        );
                      })}
                    </h4>
                  </td>
                  <td className="center aligned">
                    <form className="ui form small">
                      <select
                        className="field"
                        onChange={(e) => {
                          const { model, makes } = JSON.parse(e.target.value);
                          firebase
                            .firestore()
                            .collection("cars")
                            .doc(x.id)
                            .update({ model, makes });
                        }}
                      >
                        <option>No Model</option>
                        {models.map((m: any) => {
                          return (
                            <option
                              value={JSON.stringify(m)}
                              selected={m.model === x.model}
                              key={m.model}
                            >
                              {m.model} | {m.makes}
                            </option>
                          );
                        })}
                      </select>
                    </form>
                  </td>
                  <td className="center aligned">
                    <Link to={path === 'wesalecar-admin'? "/wesalecar-admin/cars/edit/" + x.id:"/cars/edit/" + x.id} className="ui button blue">Edit</Link>
                    <Link
                      to="#"
                      className="ui button red"
                      onClick={() =>
                        firebase
                          .firestore()
                          .collection("cars")
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
          <tfoot>
            <tr>
              <th className="center aligned">
                Publish {data.filter((x: any) => x.published === true).length}
              </th>
              <th colSpan={7}>
                Unpublish{" "}
                {data.filter((x: any) => x.published === false).length}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Content>
  );
}
