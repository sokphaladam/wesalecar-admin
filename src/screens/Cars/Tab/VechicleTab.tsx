import React, { useEffect } from 'react';
import { VechicleItem } from '../../../libs/VechicleItem';
import { VechicleType } from '../../../libs/DataType';

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: VechicleType;
}

export function VechicleTab(props: Props) {
  let items = VechicleItem;

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

  useEffect(()=>{
    setTimeout(()=>{
      for(let i = 0; i< items.length; i++){
        if(i === 0){
          items[i].ref!.checked =  Boolean(props.data!.arai_mileage!)
        }
        else if(i === 1){
          items[i].ref!.checked =  Boolean(props.data!.engine_displacement!)
        }
        else if(i === 2){
          items[i].ref!.checked =  Boolean(props.data!.max_torque!)
        }
        else if(i === 3){
          items[i].ref!.checked =  Boolean(props.data!.seating_capacity!)
        }
        else if(i === 4){
          items[i].ref!.checked =  Boolean(props.data!.boot_space!)
        }
        else if(i === 5){
          items[i].ref!.checked =  Boolean(props.data!.fuel_type!)
        }
        else if(i === 6){
          items[i].ref!.checked =  Boolean(props.data!.max_power!)
        }
        else if(i === 7){
          items[i].ref!.checked =  Boolean(props.data!.transmission_type!)
        }
        else if(i === 8){
          items[i].ref!.checked =  Boolean(props.data!.fuel_tank_capacity!)
        }
        else if(i === 9){
          items[i].ref!.checked =  Boolean(props.data!.body_type!)
        }
      }
    }, 500)
  })

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
                            <input type="text" ref={ref => items[i].ref = ref} required onChange={handleChange}/>
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
                            <input type="text" ref={ref => items[i].ref = ref} required onChange={handleChange}/>
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