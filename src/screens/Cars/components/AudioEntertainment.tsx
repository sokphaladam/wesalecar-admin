import React from 'react';
import { TableComponent } from './TableComponent';
import { AudioEntertainmentType } from '../libs/FieldType';
import { AudioEntertainmentData } from '../libs/MapDataToField';

interface Props {
  data: AudioEntertainmentType;
  onChange: (data: AudioEntertainmentType) => void;
}

export function AudioEntertainment(props: Props){
  return(
    <div className="ui form large">
      <h4>Audio Entertainment</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={AudioEntertainmentData} onChange={data => props.onChange(data)}/>
    </div>
  )
}