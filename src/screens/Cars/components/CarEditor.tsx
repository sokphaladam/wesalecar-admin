import React from 'react';
import { Content } from '../../../components/Content';
import { TabComponent } from '../../../components/TabComponent';
import { TabContentComponent } from '../../../components/TabContentComponent';
import { VehicleInformation } from './VehicleInformation';
import { Mirror } from './Mirror';
import { Light } from './Light';
import { FieldCarType } from '../libs/FieldType';
import { Heat } from './Heat';
import { CarpetTrimAndMat } from './CarpetTrimAndMat';
import { Luggage } from './Luggage';
import { TestDriveSensor } from './TestDriveSensor';
import { EletricalSystem } from './EletricalSystem';
import { TiresAndWheels } from './TiresAndWheels';
import { CarBody } from './CarBody';
import { CheckDoor } from './CheckDoor';
import { AudioEntertainment } from './AudioEntertainment';
import { InteriorAmenities } from './InteriorAmenities';
import { Seats } from './Seats';
import { TestDriveGeneralComponent } from './TestDriveGeneralComponent';
import { Engine } from './Engine';
import { Transmission } from './Transmission';
import { Brakes } from './Brakes';

export type DataCarEdtorType = {
  price?: number;
  title?: string;
  images?: string[];
  make?: string;
  model?: string;
  extact_model?: string;
  transmission?: string;
  interior_trim?: string;
  year?: string;
  specs?: string;
  engine_cylinders?: string;
  paint?: string;
  accident_history?: boolean;
  odometer_reading?: string;
  vehicle_history?: string;
  service_history?: string;
  service_type?: string;
  body?: string;
  drive?: string;
  steering_wheel_location?: string;
  car_color?: string;
  fuel_type?: string;
  car_number?: string;
  engine_size?: string;
  structural?: boolean;
  chassis_repaired?: boolean;
  chassis_extension?: string;
  navigation?: boolean;
  vin_plate?: boolean;
  manufacture_year?: string;
  manufacture_month?: string;
  warranty_validity?: boolean;
  smc?: string;
  number_of_key?: number;
  roof?: string;
  rim_type?: string;
  rim_condition?: string;
  seat_color?: string;
  number_seat?: number;
  created?: string;
  sub?: FieldCarType;
}

interface Props  {
  data: DataCarEdtorType;
  onChange: (data: DataCarEdtorType) => void;
  onSubmit: () => void;
}

export function CarEditor(props: Props){
  return(
    <Content>
      <div className="row">
        <div className="col-md-12">
          <TabComponent selectDefault={0} onSubmit={()=>props.onSubmit()}>
            <TabContentComponent
              index={0}
              name="Vehicle Information"
              hash="infor"
            >
              <VehicleInformation data={props.data} onChange={data => props.onChange(data)}/>
            </TabContentComponent>
            <TabContentComponent index={1} name="Mirrors" hash="mirror">
              <Mirror data={props.data.sub === undefined ? {}: props.data.sub!.mirror!} onChange={data => props.onChange({ ...props.data, sub: {...props.data.sub, mirror: data} })}/>
            </TabContentComponent>
            <TabContentComponent index={1} name="Lights" hash="light">
              <Light data={props.data.sub === undefined ? {} : props.data.sub!.light!} onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, light: data } })}/>
            </TabContentComponent>
            <TabContentComponent index={1} name="Heat/AC" hash="ac">
              <Heat data={props.data.sub === undefined ? {} : props.data.sub!.heat!} onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, heat: data } })}/>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Carpet, Trim And Mats"
              hash="mats"
            >
              <CarpetTrimAndMat data={props.data.sub === undefined ? {} : props.data.sub!.carp!} onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, carp: data } })}/>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Luggage Compartment"
              hash="luggage"
            >
              <Luggage
                data={props.data.sub === undefined ? {} : props.data.sub!.luggage! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, luggage: data } })}
              />
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive Sensors"
              hash="test"
            >
              <TestDriveSensor
                data={props.data.sub === undefined ? {} : props.data.sub!.testDrive! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, testDrive: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Eletrical System" hash="ele">
              <EletricalSystem
                data={props.data.sub === undefined ? {} : props.data.sub!.ele! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, ele: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Tires And Wheel" hash="tires">
              <TiresAndWheels
                data={props.data.sub === undefined ? {} : props.data.sub!.tires! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, tires: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={0} name="Car Body" hash="body">
              <CarBody
                data={props.data.sub === undefined ? {} : props.data.sub!.body! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, body: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Check of Doors" hash="doors">
              <CheckDoor
                data={props.data.sub === undefined ? {} : props.data.sub!.door! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, door: data } })}
              />
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Audio Entertainment"
              hash="audio"
            >
              <AudioEntertainment
                data={props.data.sub === undefined ? {} : props.data.sub!.audio! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, audio: data } })}
              />
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Interior Amenities"
              hash="interior"
            >
              <InteriorAmenities
                data={props.data.sub === undefined ? {} : props.data.sub!.interior! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, interior: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Seats" hash="seats">
              <Seats
                data={props.data.sub === undefined ? {} : props.data.sub!.seat! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, seat: data } })}
              />
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive General"
              hash="general"
            >
              <TestDriveGeneralComponent
                data={props.data.sub === undefined ? {} : props.data.sub!.testDriveGeneral! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, testDriveGeneral: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Engine" hash="engine">
              <Engine
                data={props.data.sub === undefined ? {} : props.data.sub!.engine! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, engine: data } })}
              />
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Transmission"
              hash="transmission"
            >
              <Transmission
                data={props.data.sub === undefined ? {} : props.data.sub!.transmission! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, transmission: data } })}
              />
            </TabContentComponent>
            <TabContentComponent index={1} name="Brakes" hash="brakes">
              <Brakes
                data={props.data.sub === undefined ? {} : props.data.sub!.brakes! } 
                onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, brakes: data } })}
              />
            </TabContentComponent>
          </TabComponent>
        </div>
      </div>
    </Content>
  )
}