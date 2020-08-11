import React from 'react';
import { TableComponent } from './TableComponent';
import { SeatsType } from '../libs/FieldType';
import { SeatsData } from '../libs/MapDataToField';

interface Props {
  data: SeatsType;
  onChange: (data: SeatsType) => void;
}

export function Seats(props: Props){
  return(
    <div className="ui form large">
      <h4>Seats</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={SeatsData} onChange={data => props.onChange(data)}/>
    </div>
  )
}