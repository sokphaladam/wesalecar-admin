import React from 'react';
import { TableComponent } from './TableComponent';
import { InteriorAmenitiesType } from '../libs/FieldType';
import { InteriorAmenitiesData } from '../libs/MapDataToField';

interface Props {
  data: InteriorAmenitiesType;
  onChange: (data: InteriorAmenitiesType) => void;
}

export function InteriorAmenities(props: Props){
  return(
    <div className="ui form large">
      <h4>Interior Amenities</h4>
      <div className="ui divider"></div>
      <TableComponent data={props.data} dataDummy={InteriorAmenitiesData} onChange={data => props.onChange(data)}/>
    </div>
  )
}