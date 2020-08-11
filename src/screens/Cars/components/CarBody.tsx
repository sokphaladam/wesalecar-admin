import React from 'react';
import { TableComponent } from './TableComponent';
import { CarBodyType } from '../libs/FieldType';
import { CarBodyData } from '../libs/MapDataToField';

interface Props {
  data: CarBodyType;
  onChange: (data: CarBodyType) => void;
}

export function CarBody(props: Props){
  return(
    <div className="ui form large">
      <h4>Car Body</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={CarBodyData} onChange={data => props.onChange(data)}/>
    </div>
  )
}