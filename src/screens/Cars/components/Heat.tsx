import React from 'react';
import { TableComponent } from './TableComponent';
import { HeatACType } from '../libs/FieldType';
import { HeatData } from '../libs/MapDataToField';

interface Props {
  data: HeatACType;
  onChange: (data: HeatACType) => void;
}

export function Heat(props: Props){
  return(
    <div className="ui form large">
      <h4>Glass And OutSide Mirrors</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={HeatData} onChange={data => props.onChange(data)} />
    </div>
  )
}