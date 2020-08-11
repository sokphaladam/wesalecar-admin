import React, { useState } from 'react';
import { TableComponent } from './TableComponent';
import { LightType } from '../libs/FieldType';
import { LightData } from '../libs/MapDataToField';

interface Props {
  data: LightType;
  onChange: (data: LightType) => void;
}

export function Light(props: Props){
  return(
    <div className="ui form large">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={LightData} onChange={data => props.onChange(data)} />
    </div>
  )
}