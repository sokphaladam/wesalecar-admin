import React from 'react';
import { TableComponent } from './TableComponent';
import { CarpetType } from '../libs/FieldType';
import { CarpetData } from '../libs/MapDataToField';

interface Props {
  data: CarpetType;
  onChange: (data: CarpetType) => void;
}

export function CarpetTrimAndMat(props: Props){
  return(
    <div className="ui form large">
      <h4>Carpet, Trim And Mats</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={CarpetData} onChange={data => props.onChange(data)} />
    </div>
  )
}