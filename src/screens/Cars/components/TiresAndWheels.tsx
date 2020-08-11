import React from 'react';
import { TableComponent } from './TableComponent';
import { TireAndWheelsType } from '../libs/FieldType';
import { TiresAndWheelData } from '../libs/MapDataToField';

interface Props {
  data: TireAndWheelsType;
  onChange: (data: TireAndWheelsType) => void;
}

export function TiresAndWheels(props: Props){
  return(
    <div className="ui form large">
      <h4>Tires And Wheels</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={TiresAndWheelData} onChange={data => props.onChange(data)}/>
    </div>
  )
}