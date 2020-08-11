import React from 'react';
import { TableComponent } from './TableComponent';
import { TestDriverSensorsCamerasType } from '../libs/FieldType';
import { TestDriverData } from '../libs/MapDataToField';

interface Props {
  data: TestDriverSensorsCamerasType;
  onChange: (data: TestDriverSensorsCamerasType) => void;
}

export function TestDriveSensor(props: Props){
  return(
    <div className="ui form large">
      <h4>Test Drive Sensors & Cameras</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={TestDriverData} onChange={data => props.onChange(data)}/>
    </div>
  )
}