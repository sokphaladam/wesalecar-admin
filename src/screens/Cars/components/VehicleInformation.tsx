import React from "react";
import { TableComponent } from "./TableComponent";
import { VehicleInformationType } from "../libs/FieldType";

interface Props {
  data: VehicleInformationType;
  onChange: (data: VehicleInformationType) => void;
}

export function VehicleInformation(props: Props) {
  return (
    <div className="ui form">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={dataDummy} onChange={data => props.onChange(data)}/>
    </div>
  );
}

const dataDummy = [
  {
    name: "Make",
    field: 'make',
    type: 'input'
  },
  {
    name: 'Model',
    field: 'model',
    type: 'input'
  },
  {
    name: "Extect Model",
    field: 'extect_model',
    type: 'input'
  },
  {
    name: 'Transmission',
    field: 'transmission',
    type: 'input'
  },
  {
    name: "Interior Trim",
    field: 'interior_trim',
    type: 'input'
  },
  {
    name: 'Year',
    field: 'year',
    type: 'input'
  },
  {
    name: 'Specs',
    field: 'specs',
    type: 'input'
  },
  {
    name: 'Engine Cylinders',
    field: 'engine_cylinders',
    type: 'input'
  },
  {
    name: 'Paint',
    field: 'paint',
    type: 'input'
  },
  {
    name: 'Accident History',
    field: 'accident_history',
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "Odometer Reading",
    field: "odometer_reading",
    type: "input"
  },
  {
    name: "Vehicle History",
    field: "vehicle_history",
    type: "input"
  },
  {
    name: "Service History",
    field: "service_history",
    type: 'input'
  },
  {
    name: "Service Type",
    field: "service_type",
    type: "input"
  },
  {
    name: "Body",
    field: "body",
    type: "input"
  },
  {
    name: "Drive",
    field: "drive",
    type: "input"
  },
  {
    name: "Steering Wheel Location",
    field: "steering_wheel_location",
    type: 'input'
  },
  {
    name: "Car Color",
    field: "car_color",
    type: "input"
  },
  {
    name: "Fuel Type",
    field: "fuel_type",
    type: "input"
  },
  {
    name: "Car Number",
    field: "car_number",
    type: "input"
  },
  {
    name: "Engine Size",
    field: "engine_size",
    type: "input"
  },
  {
    name: 'Structural',
    field: 'structural',
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "Chassis Repaired",
    field: "chassis_repaired",
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "Chassis Extension",
    field: "chassis_extension",
    type: "input"
  },
  {
    name: "Navigation",
    field: "navigation",
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "VIN Plate",
    field: "vin_plate",
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "Manufacture Year",
    field: "manufacture_year",
    type: "input"
  },
  {
    name: "Manufacture Month",
    field: "manufacture_month",
    type: "input"
  },
  {
    name: "Warranty Validity",
    field: "warranty_validity",
    type: 'select',
    option: [
      {
        key: "yes",
        value: true,
        label: "Yes"
      },
      {
        key: "no",
        value: false,
        label: "No"
      }
    ]
  },
  {
    name: "SMC",
    field: "smc",
    type: "input"
  },
  {
    name: "Number Of Key",
    field: "number_of_key",
    type: "input"
  },
  {
    name: 'Roof',
    field: "roof",
    type: "input"
  },
  {
    name: 'Rim Type',
    field: "rim_type",
    type: "input"
  },
  {
    name: 'Rim Condition',
    field: "rim_condition",
    type: "input"
  },
  {
    name: 'Seat Color',
    field: "seat_color",
    type: "input"
  },
  {
    name: 'Number Seats',
    field: "number_seat",
    type: "input"
  },
  {
    name: 'Number Tires',
    field: "number_tire",
    type: "input"
  },
]