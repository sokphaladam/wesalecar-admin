import React, { useState } from 'react';
import { TableComponent } from './TableComponent';
import { MirrorType } from '../libs/FieldType';

interface Props {
  data: MirrorType;
  onChange: (data: MirrorType) => void;
}

export function Mirror(props: Props){
  return(
    <div className="ui form">
      <h4>Glass And OutSide Mirrors</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={dataDummy} onChange={data => props.onChange(data)}/>
    </div>
  )
}

const dataDummy = [
  {
    name: "Windshield Glass",
    field: "windshield",
    type: "input"
  },
  {
    name: "Sunroof Glass",
    field: "sunroof",
    type: "input"
  }
]