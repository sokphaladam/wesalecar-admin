import React from "react";

type VehicleInformationType = {
  make?: string;
  model?: string;
  extact_model?: string;
  transmission?: string;
  interior_trim?: string;
  year?: number;
  specs?: string;
  engine_cylinders?: string;
  paint?: string;
  accident_history?: boolean;
  odometer_reading?: number;
}

export function VehicleInformation() {
  return (
    <div className="ui form">
      <h4>Vehicle Information</h4>
      <div className="ui divider"></div>
      <div className="three fields">
        <div className="field">
          <label>Make</label>
          <input type="text" placeholder="Make" />
        </div>
        <div className="field">
          <label>Model</label>
          <input type="text" placeholder="Model" />
        </div>
        <div className="field">
          <label>Exact Model</label>
          <input type="text" placeholder="Exact Model" />
        </div>
      </div>
    </div>
  );
}
