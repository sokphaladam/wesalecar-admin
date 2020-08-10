import React from 'react';
import { TableComponent } from './TableComponent';
import { HeatACType } from '../libs/FieldType';

interface Props {
  data: HeatACType;
  onChange: (data: HeatACType) => void;
}

export function Heat(props: Props){
  return(
    <div className="ui form">
      <h4>Glass And OutSide Mirrors</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={dataDummy} onChange={data => props.onChange(data)} />
    </div>
  )
}

const dataDummy = [
  {
    name: "Air Conditioning System",
    field: "air_conditioning_system",
    type: "input"
  },
  {
    name: "Heating System",
    field: "heating_system",
    type: "input"
  }
]