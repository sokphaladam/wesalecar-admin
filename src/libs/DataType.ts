export type BasicInformationType = {
  title?: string | null;
  price?: number | 0;
  type?: string | null;
  year?: number | 0;
  speed?: number | 0;
  image?: string[] | [];
}

export type OverviewType = {
  overviews?: string | null;
  fuel?: string | null;
  seat?: number | 0;
  air?: 1 | 0;
  engine?: string | null;
  breaks?: string | null;
  colors?: string | null;
  power?: 1 | 0;
}

export type FeatureType = {
  power_steering?: boolean;
  power_windows_front?: boolean;
  air_conditioner?: boolean;
  passenger_airbag?: boolean;
  foglights_front?: boolean;
  anti_lock_braking_system?: boolean;
  driver_airbag?: boolean;
  wheel_covers?: boolean;
  automatic_climate_control?: boolean;
}

export type VechicleType = {
  arai_mileage?: string | null;
  engine_displacement?: string | null;
  max_torque?: string | null;
  seating_capacity?: string | null;
  boot_space?: string | null;
  fuel_type?: string | null;
  max_power?: string | null;
  transmission_type?: string | null;
  fuel_tank_capacity?: string | null;
  body_type?: string | null;
}