import { FieldCarType } from "./FieldType"

export const obj: FieldCarType = {
  information: {
    make: "",
    model: "",
    extact_model: "",
    transmission: "",
    interior_trim: "",
    year: "",
    specs: "",
    engine_cylinders: "",
    paint: "",
    accident_history: true,
    odometer_reading: "",
    vehicle_history: "",
    service_history: "",
    service_type: "",
    body: "",
    drive: "",
    steering_wheel_location: "",
    car_color: "",
    fuel_type: "",
    car_number: "",
    engine_size: "",
    structural: true,
    chassis_repaired: true,
    chassis_extension: "",
    navigation: true,
    vin_plate: true,
    manufacture_year: "",
    manufacture_month: "",
    warranty_validity: true,
    smc: "",
    number_of_key: 0,
    roof: "",
    rim_type: "",
    rim_condition: "",
    seat_color: "",
    number_seat: 0,
    number_tire: 0,
  },
  mirror: {
    windshield: "",
    sunroof: ""
  },
  light: {
    front_end_exterior_light: "",
    side_exterior_right: "",
    side_exterior_left: "",
    back_end_exterior_light: "",
    hazard_light: "",
  },
  heat: {
    air_conditioning_system: "",
    heating_system: ""
  },
  audio: {
    board_computer: "",
    radio_casette: ""
  },
  body: {
    rust: "",
    bonnet: "",
    bonnet_multiple_scartches: "",
    bonnet_replaced: true,
    boot: "",
    boot_multiple_dents: "",
    boot_multiple_scartches: "",
    boot_replaced: true,
    bumper_front: "",
    bumper_front_replaced: true,
    bumper_rear: "",
    bumper_rear_multiple_dents: "",
    bumper_rear_multiple_scartches: "",
    convertible_top: "",
    door_front_left: "",
    door_front_left_multiple_dents: "",
    door_front_left_multiple_scartches: "",
    door_front_left_replaced: true,
    door_front_right: "",
    door_front_right_multiple_dents: "",
    door_front_right_multiple_scartches: "",
    door_front_right_replaced: true,
    door_rear_left: "",
    door_rear_left_multiple_dents: "",
    door_rear_left_multiple_scartches: "",
    door_rear_left_replaced: true,
    door_rear_right: "",
    door_rear_right_multiple_dents: "",
    door_rear_right_multiple_scartches: "",
    door_rear_right_replaced: true,
    rear_bumper_replaced: true,
    roof: "",
    roof_multiple_scartches: "",
    roof_rack: "",
    sings: true,
    sunroof_moonroof: "",
    underneath: "",
    wing_front_left: "",
    wing_front_left_multiple_dents: "",
    wing_front_left_multiple_scartches: "",
    wing_front_left_replaced: true,
    wing_front_right: "",
    wing_front_right_replced: true,
    wing_rear_front_left: "",
    wing_rear_front_left_multiple_dents: "",
    wing_rear_front_left_multiple_scartches: "",
    wing_rear_front_left_replaced: true,
    wing_rear_right: "",
    wing_rear_right_multiple_dents: '',
    wing_rear_right_multiple_scartches: "",
    wing_right_rear_replaced: true
  },
  brakes: {
    brake_pads_and_shoes: "",
    parking_brake: "",
    rotors_and_drums: ""
  },
  carp: {
    door_trim_and_door_planel: "",
    headliner: ""
  },
  door: {
    hood: "",
    power_liftgate_operation: "",
    tailgate: ""
  },
  ele: {
    front_left_door: "",
    front_right_door: "",
    rear_left_door: "",
    rear_right_door: ""
  },
  engine: {
    hoses: "",
    inspect: "",
    water: ""
  },
  interior: {
    center_armest: "",
    glove_box: "",
    horn: "",
    steering_wheel_controls: "",
    warning_signals_active: true,
  },
  luggage: {
    vehicle_jack_tool_kit_wheel_spanner: "",
  },
  seat: {
    safety_belts: ""
  },
  testDrive: {
    front_camera: "",
    front_sensors: "",
    left_cameras: "",
    rear_camera: "",
    rear_sensors: "",
    right_camera: ""
  },
  testDriveGeneral: {
    cruise_control: "",
    engine: "",
    engine_exhaust: "",
    engine_group: "",
    engine_noise: "",
    engine_start_property: true,
    engine_visual: "",
    profile_system: "",
    struts_and_shocks: "",
    transmission_condition: ""
  },
  tires: {
    correct_size: true,
    front_left_tire_condition: "",
    front_left_tire_production_date: "",
    front_right_tire_condition: "",
    front_right_tire_production_date: "",
    rear_left_tire_condition: "",
    rear_left_tire_production_date: "",
    rear_right_tire_condition: "",
    reat_right_tire_production_date: "",
    tires_match: true,
    wheels_convers_and_center_caps: "",
    wheels_match: true
  },
  transmission: {
    automatic_transmissions_transaxle: "",
    differential_drive_axle: "",
    transfer_case_4x4: ''
  }
}

const getKey = (typeObjData: any) => {
  return Object.keys(typeObjData).map(x => {
    const str = x.replace(/\_/g, " ");
    const strCapitalize = str.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
    const typeObj = typeof((typeObjData as any)[x]);

    return {
      name: strCapitalize,
      field: x,
      type: (typeObj === 'string' || typeObj === 'number') ? "input": "select",
      option: [
        {
          key: "yes",
          value: true,
          label: "Yes"
        },
        {
          key: "no",
          value: false,
          label: "No"
        }
      ]
    }
  })
}

export const VehicleData = getKey(obj.information);
export const MirrorData = getKey(obj.mirror);
export const LightData = getKey(obj.light);
export const HeatData = getKey(obj.heat);
export const CarpetData= getKey(obj.carp);
export const TestDriverData = getKey(obj.testDrive);
export const EletricalData = getKey(obj.ele);
export const TiresAndWheelData = getKey(obj.tires);
export const CarBodyData = getKey(obj.body);
export const CheckDoorData = getKey(obj.door);
export const AudioEntertainmentData = getKey(obj.audio);
export const InteriorAmenitiesData = getKey(obj.interior);
export const SeatsData = getKey(obj.seat);
export const TestDriverGeneralData = getKey(obj.testDriveGeneral);
export const EngineData = getKey(obj.engine);
export const TransmissionData = getKey(obj.transmission);
export const BrakesData = getKey(obj.brakes);
export const LuggaeData = getKey(obj.luggage);