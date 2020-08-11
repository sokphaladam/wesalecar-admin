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
  const [data, setData] = useState(props.data);
  const [images, setImage] = useState(props.data.images);

  return (
    <div className="ui form large">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <div className="two fields">
        <TextInput
          label="Title"
          value={data.title || ""}
          onChange={async (e) =>{
            await setData({...data, title: e.target.value });
            await props.onChange(data)
          }}
        />
        <TextInput
          label="Price"
          type="number"
          value={data.price || 0}
          step={0.0}
          onChange={async(e) =>{
            await setData({...data, price: Number(e.target.value) });
            await props.onChange(data);
          }}
        />
      </div>
      <UploadComponent
        images={images || []}
        onChange={ async (img: any) => {
          await setImage(img);
          await props.onChange({ ...data, images })
        }}
      />
      <TableComponent
        data={data}
        dataDummy={VehicleData}
        onChange={async (v) =>{
          await setData({...v});
          await props.onChange(data);
        }}
      />
    </div>
  );
}
