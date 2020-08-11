import React from 'react';
import { TableComponent } from './TableComponent';
import { CheckOfDoorsType } from '../libs/FieldType';
import { CheckDoorData } from '../libs/MapDataToField';

interface Props {
  data: CheckOfDoorsType;
  onChange: (data: CheckOfDoorsType) => void;
}

export function CheckDoor(props: Props){
  return(
    <div className="ui form large">
      <h4>Check of Doors</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={CheckDoorData} onChange={data => props.onChange(data)}/>
    </div>
  )
}