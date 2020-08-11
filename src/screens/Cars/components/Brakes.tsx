import React from 'react';
import { TableComponent } from './TableComponent';
import { BrakesType } from '../libs/FieldType';
import { BrakesData } from '../libs/MapDataToField';

interface Props {
  data: BrakesType;
  onChange: (data: BrakesType) => void;
}

export function Brakes(props: Props){
  return(
    <div className="ui form large">
      <h4>Car Body</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={BrakesData} onChange={data => props.onChange(data)}/>
    </div>
  )
}