import React from 'react';
import { Content } from '../../../components/Content';
import { TabComponent } from '../../../components/TabComponent';
import { TabContentComponent } from '../../../components/TabContentComponent';
import { VehicleInformation } from './VehicleInformation';
import { Mirror } from './Mirror';
import { Light } from './Light';
import { MirrorType, LightType, HeatACType, CarpetType, LuggageType, TestDriverSensorsCamerasType, EletricalSystemType, TireAndWheelsType, CarBodyType, CheckOfDoorsType, AudioEntertainmentType, InteriorAmenitiesType, SeatsType, TestDriveGeneral, EngineType, TransmissionTransaxleDifferentialAndTransferCaseType, BrakesType } from '../libs/FieldType';
import { Heat } from './Heat';
import { CarpetTrimAndMat } from './CarpetTrimAndMat';

export type DataCarEdtorType = {
  title?: string;
  images?: string;
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
  sub?: {
    mirror?: MirrorType | {};
    light?: LightType | {};
    heat?: HeatACType | {};
    carpat?: CarpetType | {};
    luggage?: LuggageType | {};
    test_driver?: TestDriverSensorsCamerasType | {};
    ele?: EletricalSystemType | {};
    tires?: TireAndWheelsType | {};
    body?: CarBodyType | {};
    check_door?: CheckOfDoorsType | {};
    audio?: AudioEntertainmentType | {};
    interior?: InteriorAmenitiesType | {};
    seats?: SeatsType | {};
    general?: TestDriveGeneral | {};
    engine?: EngineType | {};
    transmission?: TransmissionTransaxleDifferentialAndTransferCaseType | {};
    brakes?: BrakesType | {};
  }
}

interface Props  {
  data: DataCarEdtorType;
  onChange: (data: DataCarEdtorType) => void;
}

export function CarEditor(props: Props){
  return(
    <Content>
      <div className="row">
        <div className="col-md-12">
          <TabComponent selectDefault={0}>
            <TabContentComponent
              index={0}
              name="Vehicle Information"
              hash="infor"
            >
              <VehicleInformation data={props.data} onChange={data => props.onChange({ ...props.data, ...data })}/>
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
              <CarpetTrimAndMat data={props.data.sub === undefined ? {} : props.data.sub!.carpat!} onChange={data => props.onChange({ ...props.data, sub: { ...props.data.sub, carpat: data } })}/>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Luggage Compartment"
              hash="luggage"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive Sensors"
              hash="test"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Eletrical System" hash="ele">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Tires And Wheel" hash="tires">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={0} name="Car Body" hash="body">
              <div>Hello World 0</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Check of Doors" hash="doors">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Audio Entertainment"
              hash="audio"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Interior Amenities"
              hash="interior"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Seats" hash="seats">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Test Drive General"
              hash="general"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Engine" hash="engine">
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent
              index={1}
              name="Transmission"
              hash="transmission"
            >
              <div>Hello World 1</div>
            </TabContentComponent>
            <TabContentComponent index={1} name="Brakes" hash="brakes">
              <div>Hello World 1</div>
            </TabContentComponent>
          </TabComponent>
        </div>
      </div>
    </Content>
  )
}