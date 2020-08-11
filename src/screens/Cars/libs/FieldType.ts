export interface FieldCarType {
  information?: VehicleInformationType;
  mirror?: MirrorType;
  light?: LightType;
  heat?: HeatACType;
  carp?: CarpetType;
  luggage?: LuggageType;
  testDrive?: TestDriverSensorsCamerasType;
  ele?: EletricalSystemType;
  tires?: TireAndWheelsType;
  body?: CarBodyType;
  door?: CheckOfDoorsType;
  audio?: AudioEntertainmentType;
  interior?: InteriorAmenitiesType;
  seat?: SeatsType;
  testDriveGeneral?: TestDriveGeneral;
  engine?: EngineType;
  transmission?: TransmissionTransaxleDifferentialAndTransferCaseType;
  brakes?: BrakesType;
}

export type VehicleInformationType = {
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
  number_tire?: number;
}

export type MirrorType = {
  windshield?: string | null;
  sunroof?: string | null;
}

export type LightType = {
  front_end_exterior_light?: string | null;
  side_exterior_right?: string | null;
  side_exterior_left?: string | null;
  back_end_exterior_light?: string | null;
  hazard_light?: string | null;
}

export type HeatACType = {
  air_conditioning_system?: string | null;
  heating_system?: string | null;
}

export type CarpetType = {
  headliner?: string | null;
  door_trim_and_door_planel?: string | null;
}

export type LuggageType = {
  vehicle_jack_tool_kit_wheel_spanner?: string | null;  
}

export type TestDriverSensorsCamerasType = {
  front_camera?: string | null;
  right_camera?: string | null;
  rear_sensors?: string | null;
  rear_camera?: string | null;
  front_sensors?: string | null;
  left_cameras?: string | null;
}

export type EletricalSystemType = {
  front_right_door?: string | null;
  rear_right_door?: string | null;
  front_left_door?: string | null;
  rear_left_door?: string | null;
}

export type TireAndWheelsType = {
  tires_match?: boolean | true;
  wheels_match?: boolean | true;
  wheels_convers_and_center_caps?: string | null;
  front_left_tire_condition?: string | null;
  front_left_tire_production_date?: string | null;
  rear_left_tire_condition?: string | null;
  rear_left_tire_production_date?: string | null;
  correct_size?: boolean | true;
  front_right_tire_condition?: string | null;
  front_right_tire_production_date?: string | null;
  rear_right_tire_condition?: string | null;
  reat_right_tire_production_date?: string | null;
}

export type CarBodyType = {
  door_front_left_replaced?: boolean | true;
  door_front_left?: string | null;
  door_front_left_multiple_scartches?: string | null;
  door_front_left_multiple_dents?: string | null;
  door_rear_left_replaced?: boolean | true;
  door_rear_left?: string | null;
  door_rear_left_multiple_scartches?: string | null;
  door_rear_left_multiple_dents?: string | null;
  wing_front_left_replaced?: boolean | true;
  wing_front_left?: string | null;
  wing_front_left_multiple_scartches?: string | null;
  wing_front_left_multiple_dents?: string | null;
  wing_rear_front_left_replaced?: boolean | true;
  wing_rear_front_left?: string | null;
  wing_rear_front_left_multiple_scartches?: string | null;
  wing_rear_front_left_multiple_dents?: string | null;
  bumper_front_replaced?: boolean | true;
  bumper_front?: string | null;
  rear_bumper_replaced?: boolean | true;
  bumper_rear?: string | null;
  bumper_rear_multiple_scartches?: string | null;
  bumper_rear_multiple_dents?: string | null;
  roof?: string | null;
  roof_multiple_scartches?: string | null;
  roof_rack?: string;
  door_front_right_replaced?: boolean | true;
  door_front_right?: string | null;
  door_front_right_multiple_scartches?: string | null;
  door_front_right_multiple_dents?: string | null;
  door_rear_right_replaced?: boolean | true;
  door_rear_right?: string | null;
  door_rear_right_multiple_scartches?: string | null;
  door_rear_right_multiple_dents?: string | null;
  wing_front_right_replced?: boolean | true;
  wing_front_right?: string | null;
  wing_right_rear_replaced?: boolean | true;
  wing_rear_right?: string | null;
  wing_rear_right_multiple_scartches?: string | null;
  wing_rear_right_multiple_dents?: string | null;
  boot_replaced?: boolean | true;
  boot?: string | null;
  boot_multiple_scartches?: string | null;
  boot_multiple_dents?: string | null;
  sings?: boolean | true;
  rust?: string | null;
  underneath?: string | null;
  bonnet_replaced?: boolean | true;
  bonnet?: string | null;
  bonnet_multiple_scartches?: string | null;
  sunroof_moonroof?: string | null;
  convertible_top?: string | null;
}

export type CheckOfDoorsType = {
  tailgate?: string | null;
  power_liftgate_operation?: string | null;
  hood?: string | null;
}

export type AudioEntertainmentType = {
  radio_casette?: string | null;
  board_computer?: string | null;
}

export type InteriorAmenitiesType = {
  warning_signals_active?: boolean | true;
  horn?: string | null;
  center_armest?: string | null;
  steering_wheel_controls?: string | null;
  glove_box?: string | null;
}

export type SeatsType = {
  safety_belts?: string | null;
}

export type TestDriveGeneral = {
  engine_start_property?: boolean | true;
  engine?: string | null;
  engine_group?: string | null;
  engine_noise?: string | null;
  engine_visual?: string | null;
  engine_exhaust?: string | null;
  profile_system?: string | null;
  cruise_control?: string | null;
  transmission_condition?: string | null;
  struts_and_shocks?: string | null;
}

export type EngineType = {
  hoses?: string | null;
  inspect?: string | null;
  water?: string | null;
}

export type TransmissionTransaxleDifferentialAndTransferCaseType = {
  automatic_transmissions_transaxle?: string | null;
  transfer_case_4x4?: string | null;
  differential_drive_axle?: string | null;
}

export type BrakesType = {
  rotors_and_drums?: string | null;
  brake_pads_and_shoes?: string | null;
  parking_brake?: string | null;
}