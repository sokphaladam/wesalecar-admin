import React, { useState } from 'react';
import { TableComponent } from './TableComponent';
import { LightType } from '../libs/FieldType';

interface Props {
  data: LightType;
  onChange: (data: LightType) => void;
}

export function Light(props: Props){
  return(
    <div className="ui form">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={dataDummy} onChange={data => props.onChange(data)} />
    </div>
  )
}

const dataDummy = [
  {
    name: "Front-end Exterior Light",
    field: "front_end_exterior_light",
    type: "input"
  },
  {
    name: "Side Exterior Right",
    field: "side_exterior_right",
    type: "input"
  },
  {
    name: "Side Exterior Left",
    field: "side_exterior_left",
    type: "input"
  },
  {
    name: "Back-end Exterior Light",
    field: "back_end_exterior_light",
    type: "input"
  },
  {
    name: "Hazard Light",
    field: "hazard_light",
    type: "input"
  }
]