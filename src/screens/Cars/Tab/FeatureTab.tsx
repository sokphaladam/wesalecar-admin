import React from 'react';
import { FeatureItem } from '../../../libs/FeatureItem';

export function FeatureTab() {
  let items = FeatureItem;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const feature = {
      power_steering: items[0].ref!.checked,
      power_windows_front: items[1].ref!.checked,
      air_conditioner: items[2].ref!.checked,
      passenger_airbag: items[3].ref!.checked,
      foglights_front: items[4].ref!.checked,
      anti_lock_braking_system: items[5].ref!.checked,
      driver_airbag: items[6].ref!.checked,
      wheel_covers: items[7].ref!.checked,
      automatic_climate_control: items[8].ref!.checked,
    }
    console.log(feature);
  }

  return (
    <form onSubmit={handleSubmit}>
      <table className="ui celled striped table small very collapsing">
        <tbody>
          {
            items.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.name}</td>
                  <td className='center aligned'>
                    <div className="ui small">
                      <input type="checkbox" ref={ref => items[i].ref = ref}/>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button className="ui button large blue">Next</button>
    </form>
  )
}