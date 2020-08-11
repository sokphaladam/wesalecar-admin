import React, { useState } from "react";
import { TableComponent } from "./TableComponent";
import { VehicleData } from "../libs/MapDataToField";
import { TextInput } from "../../../components/TextInput";
import { UploadComponent } from "./UploadComponent";
import { DataCarEdtorType } from "./CarEditor";

interface Props {
  data: DataCarEdtorType;
  onChange: (data: DataCarEdtorType) => void;
}

export function VehicleInformation(props: Props) {
  const [uploading, setUploading] = useState(false);

  const onUploading = () => {
    setUploading(true);
  }

  const onUploaded = () => {
    setUploading(false);
  }

  return (
    <div className="ui form large">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <div className="two fields">
        <TextInput
          label="Title"
          value={props.data.title || ""}
          onChange={(e) =>{
            props.onChange({ ...props.data, title: e.target.value })
          }}
        />
        <TextInput
          label="Price"
          type="number"
          value={props.data.price || 0}
          step={0.0}
          onChange={(e) =>{
            props.onChange({...props.data, price: Number(e.target.value)});
          }}
        />
      </div>
      <UploadComponent
        images={props.data.images || []}
        onChange={(img: any) => {
          props.onChange({ ...props.data, images: img });
        }}
        onUploading={onUploading}
        onUploaded={onUploaded}
      />
      {
        !uploading &&
        <TableComponent
          data={props.data.sub?.information}
          dataDummy={VehicleData}
          onChange={(v) => {
            props.onChange({ ...props.data, ...v, sub: { ...props.data.sub, information: v } });
          }}
        />
      }
    </div>
  );
}

// { ...props.data, sub: {...props.data.sub, mirror: data } }