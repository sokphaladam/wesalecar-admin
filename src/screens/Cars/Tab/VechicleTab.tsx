import React from 'react';
import { VechicleItem } from '../../../libs/VechicleItem';

export function VechicleTab() {
  let items = VechicleItem;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const vechicle = {
      arai_mileage: items[0].ref!.value,
      engine_displacement: items[1].ref!.value,
      max_torque: items[2].ref!.value,
      seating_capacity: items[3].ref!.value,
      boot_space: items[4].ref!.value,
      fuel_type: items[5].ref!.value,
      max_power: items[6].ref!.value,
      transmission_type: items[7].ref!.value,
      fuel_tank_capacity: items[8].ref!.value,
      body_type: items[9].ref!.value,
    }
    console.log(vechicle);
  }

  return (
    <form className="ui form large" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <table className="ui celled striped table">
            <tbody>
              {
                items.map((x, i) => {
                  if (i < 5) {
                    return (
                      <tr key={i}>
                        <td>{x.name}</td>
                        <td className='center aligned'>
                          <div className="ui small field">
                            <input type="text" ref={ref => items[i].ref = ref} required/>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="ui celled striped table">
            <tbody>
              {
                items.map((x, i) => {
                  if (i >= 5) {
                    return (
                      <tr key={i}>
                        <td>{x.name}</td>
                        <td className='center aligned'>
                          <div className="ui small field">
                            <input type="text" ref={ref => items[i].ref = ref} required/>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <br/>
      <button className="ui button large blue">Submit</button>
    </form>
  )
}