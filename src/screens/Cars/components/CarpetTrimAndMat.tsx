import React from 'react';
import { TableComponent } from './TableComponent';
import { CarpetType } from '../libs/FieldType';

interface Props {
  data: CarpetType;
  onChange: (data: CarpetType) => void;
}

export function CarpetTrimAndMat(props: Props){
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
    name: "Headliner",
    field: "headliner",
    type: "input"
  },
  {
    name: "Door Trim And Door Planel",
    field: "door_trim_and_door_planel",
    type: "input"
  }
]