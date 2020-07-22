/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { VechicleItem } from '../../../libs/VechicleItem';
import { VechicleType } from '../../../libs/DataType';

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: VechicleType;
  type: 'create' | 'edit';
}

export function VechicleTab(props: Props) {
  let items = VechicleItem;
  const [load, setLoad] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const vechicle: VechicleType = {
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
    props.handleNext(vechicle);
  }

  const handleChange = () => {
    const vechicle: VechicleType = {
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
    props.handleChange(vechicle);
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
                            {
                              i === 0 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.arai_mileage!} onChange={handleChange} required/>
                            }
                            {
                              i === 1 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.engine_displacement!} onChange={handleChange} required/>
                            }
                            {
                              i === 2 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.max_torque!} onChange={handleChange} required/>
                            }
                            {
                              i === 3 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.seating_capacity!} onChange={handleChange} required/>
                            }
                            {
                              i === 4 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.boot_space!} onChange={handleChange} required/>
                            }
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
                            {
                              i === 5 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.fuel_type!} onChange={handleChange} required/>
                            }
                            {
                              i === 6 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.max_power!} onChange={handleChange} required/>
                            }
                            {
                              i === 7 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.transmission_type!} onChange={handleChange} required/>
                            }
                            {
                              i === 8 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.fuel_tank_capacity!} onChange={handleChange} required/>
                            }
                            {
                              i === 9 && <input type="text" ref={ref => items[i].ref = ref} defaultValue={props.type === 'create'? '' : props.data!.body_type!} onChange={handleChange} required/>
                            }
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