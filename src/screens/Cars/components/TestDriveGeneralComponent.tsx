import React from 'react';
import { TableComponent } from './TableComponent';
import { TestDriveGeneral } from '../libs/FieldType';
import { TestDriverData } from '../libs/MapDataToField';

interface Props {
  data: TestDriveGeneral;
  onChange: (data: TestDriveGeneral) => void;
}

export function TestDriveGeneralComponent(props: Props){
  return(
    <div className="ui form large">
      <h4>Test Drive General</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={TestDriverData} onChange={data => props.onChange(data)}/>
    </div>
  )
}