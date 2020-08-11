import React from 'react';
import { TableComponent } from './TableComponent';
import { LuggageType } from '../libs/FieldType';
import { LuggaeData } from '../libs/MapDataToField';

interface Props {
  data: LuggageType;
  onChange: (data: LuggageType) => void;
}

export function Luggage(props: Props){
  return(
    <div className="ui form large">
      <h4>Luggage Compartment</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={LuggaeData} onChange={data => props.onChange(data)}/>
    </div>
  )
}