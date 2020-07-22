import React, { useEffect } from "react";
import { FeatureItem } from "../../../libs/FeatureItem";
import { FeatureType } from "../../../libs/DataType";

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: FeatureType;
  type: 'create' | 'edit';
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
                    {
                      i === 0 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.power_steering!} />
                    }
                    {
                      i === 1 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.power_windows_front!} />
                    }
                    {
                      i === 2 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.air_conditioner!} />
                    }
                    {
                      i === 3 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.passenger_airbag!} />
                    }
                    {
                      i === 4 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.foglights_front!} />
                    }
                    {
                      i === 5 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.anti_lock_braking_system!} />
                    }
                    {
                      i === 6 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.driver_airbag!} />
                    }
                    {
                      i === 7 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.wheel_covers!} />
                    }
                    {
                      i === 8 && <input type="checkbox" ref={(ref) => (items[i].ref = ref)} onChange={handleChange} defaultChecked={props.type === 'create'? false : props.data!.automatic_climate_control!} />
                    }
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
