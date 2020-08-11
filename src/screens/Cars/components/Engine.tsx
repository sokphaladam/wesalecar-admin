import React from 'react';
import { TableComponent } from './TableComponent';
import { EngineType } from '../libs/FieldType';
import { EngineData } from '../libs/MapDataToField';

interface Props {
  data: EngineType;
  onChange: (data: EngineType) => void;
}

export function Engine(props: Props){
  return(
    <div className="ui form large">
      <h4>Engine</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={EngineData} onChange={data => props.onChange(data)}/>
    </div>
  )
}