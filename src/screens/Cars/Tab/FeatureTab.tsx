import React, { useEffect } from "react";
import { FeatureItem } from "../../../libs/FeatureItem";
import { FeatureType } from "../../../libs/DataType";

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: FeatureType;
};

export function FeatureTab(props: Props) {
  let items = FeatureItem;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const feature: FeatureType = {
      power_steering: items[0].ref!.checked,
      power_windows_front: items[1].ref!.checked,
      air_conditioner: items[2].ref!.checked,
      passenger_airbag: items[3].ref!.checked,
      foglights_front: items[4].ref!.checked,
      anti_lock_braking_system: items[5].ref!.checked,
      driver_airbag: items[6].ref!.checked,
      wheel_covers: items[7].ref!.checked,
      automatic_climate_control: items[8].ref!.checked,
    };
    props.handleNext(feature);
  };

  const handleChange = () => {
    const feature: FeatureType = {
      power_steering: items[0].ref!.checked,
      power_windows_front: items[1].ref!.checked,
      air_conditioner: items[2].ref!.checked,
      passenger_airbag: items[3].ref!.checked,
      foglights_front: items[4].ref!.checked,
      anti_lock_braking_system: items[5].ref!.checked,
      driver_airbag: items[6].ref!.checked,
      wheel_covers: items[7].ref!.checked,
      automatic_climate_control: items[8].ref!.checked,
    };
    props.handleChange(feature);
  };

  useEffect(()=>{
    setTimeout(() => {
      for(let i = 0; i< items.length; i++){
        if(i === 0){
          items[i].ref!.checked =  Boolean(props.data!.power_steering!)
        }
        else if(i === 1){
          items[i].ref!.checked =  Boolean(props.data!.power_windows_front!)
        }
        else if(i === 2){
          items[i].ref!.checked =  Boolean(props.data!.air_conditioner!)
        }
        else if(i === 3){
          items[i].ref!.checked =  Boolean(props.data!.passenger_airbag!)
        }
        else if(i === 4){
          items[i].ref!.checked =  Boolean(props.data!.foglights_front!)
        }
        else if(i === 5){
          items[i].ref!.checked =  Boolean(props.data!.anti_lock_braking_system!)
        }
        else if(i === 6){
          items[i].ref!.checked =  Boolean(props.data!.driver_airbag!)
        }
        else if(i === 7){
          items[i].ref!.checked =  Boolean(props.data!.wheel_covers!)
        }
        else if(i === 8){
          items[i].ref!.checked =  Boolean(props.data!.automatic_climate_control!)
        }
      }
    }, 500)
  })

  return (
    <form onSubmit={handleSubmit}>
      <table className="ui celled striped table small very collapsing">
        <tbody>
          {items.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.name}</td>
                <td className="center aligned">
                  <div className="ui small">
                    <input
                      type="checkbox"
                      ref={(ref) => (items[i].ref = ref)}
                      onChange={handleChange}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="ui button large blue">Next</button>
    </form>
  );
}
