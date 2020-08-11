import React from 'react';
import { TableComponent } from './TableComponent';
import { EletricalSystemType } from '../libs/FieldType';
import { EletricalData } from '../libs/MapDataToField';

interface Props {
  data: EletricalSystemType;
  onChange: (data: EletricalSystemType) => void;
}

export function EletricalSystem(props: Props){
  return(
    <div className="ui form large">
      <h4>Eletrical System</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={EletricalData} onChange={data => props.onChange(data)}/>
    </div>
  )
}