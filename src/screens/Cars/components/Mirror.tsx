import React, { useState } from 'react';
import { TableComponent } from './TableComponent';
import { MirrorType } from '../libs/FieldType';
import { MirrorData } from '../libs/MapDataToField';

interface Props {
  data: MirrorType;
  onChange: (data: MirrorType) => void;
}

export function Mirror(props: Props){
  return(
    <div className="ui form large">
      <h4>Glass And OutSide Mirrors</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={MirrorData} onChange={data => props.onChange(data)}/>
    </div>
  )
}