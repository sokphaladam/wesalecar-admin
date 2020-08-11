import React from 'react';
import { TableComponent } from './TableComponent';
import { TransmissionTransaxleDifferentialAndTransferCaseType } from '../libs/FieldType';
import { TransmissionData } from '../libs/MapDataToField';

interface Props {
  
  data: TransmissionTransaxleDifferentialAndTransferCaseType;
  onChange: (data: TransmissionTransaxleDifferentialAndTransferCaseType) => void;
}

export function Transmission(props: Props){
  return(
    <div className="ui form large">
      <h4>Tranmission, Transaxle, Differential And Transfer Case</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={TransmissionData} onChange={data => props.onChange(data)}/>
    </div>
  )
}