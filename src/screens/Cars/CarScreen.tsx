import React, { useEffect, useState } from "react";
import { Content } from "../../components/Content";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

export function CarScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    getCarList();
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

  return (
    <Content>
      <div className="ui small">
        <Link to="/cars/create" className="ui button black">
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
                        ref={ref => refInput = ref} 
                        onChange={() => {
                          firebase.firestore().collection('cars').doc(x.id).update({ published: refInput!.checked })
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
                    <h4
                      className="ui image header"
                      style={{ display: "flex" }}
                    >
                      {x.image.map((y: any) => {
                        return (
                          <img
                            src={y}
                            alt=""
                            className="ui mini rounded image"
                            style={{
                              marginRight: 3,
                              height: 30,
                              width: 30
                            }}
                          />
                        );
                      })}
                    </h4>
                  </td>
                  <td className="center aligned">
                    <Link to={"/cars/edit/"+x.id}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className="center aligned">
                Publish {data.filter((x:any) => x.published === true).length}
              </th>
              <th colSpan={6}>
                Unpublish {data.filter((x:any) => x.published === false).length}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Content>
  );
}
