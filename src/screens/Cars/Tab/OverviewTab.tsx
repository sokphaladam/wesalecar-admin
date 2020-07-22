import React from 'react';
import { OverviewType } from '../../../libs/DataType';

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: OverviewType;
}

export function OverviewTab(props: Props) {
  let overviews: HTMLTextAreaElement | null = null;
  let fuel: HTMLInputElement | null = null;
  let seat: HTMLInputElement | null = null;
  let air: HTMLSelectElement | null = null;
  let engine: HTMLInputElement | null = null;
  let breaks: HTMLInputElement | null = null;
  let colors: HTMLInputElement | null = null;
  let power: HTMLSelectElement | null = null;

  const handleNext = (e: any) => {
    e.preventDefault();
    const data: OverviewType = {
      overviews: overviews!.value,
      fuel: fuel!.value,
      seat: Number(seat!.value),
      air: Number(air!.value) === 1 ? 1 : 0 ,
      engine: engine!.value,
      breaks: breaks!.value,
      colors: colors!.value,
      power: Number(power!.value) === 1 ? 1 : 0
    }

    props.handleNext(data);
  }

  const handleChange = () => {
    const data: OverviewType = {
      overviews: overviews!.value,
      fuel: fuel!.value,
      seat: Number(seat!.value),
      air: Number(air!.value) === 1 ? 1 : 0 ,
      engine: engine!.value,
      breaks: breaks!.value,
      colors: colors!.value,
      power: Number(power!.value) === 1 ? 1 : 0
    }
    props.handleChange(data);
  }
  
  return (
    <form className="ui form large" onSubmit={handleNext}>
      <div className="field">
        <label>Overview</label>
        <textarea placeholder="Text something..." required ref={ref => overviews = ref} onChange={handleChange} defaultValue={props.data!.overviews!}></textarea>
      </div>
      <div className="field">
        <label>Fuel Type</label>
        <input type="text" placeholder="Enter fuel type..." required ref={ref => fuel = ref} onChange={handleChange} defaultValue={props.data!.fuel!}/>
      </div>
      <div className="field">
        <label>Seating</label>
        <input type="number" placeholder="Enter seating..." required ref={ref => seat = ref} onChange={handleChange} defaultValue={props.data!.seat!}/>
      </div>
      <div className="field">
        <label>Air Bags</label>
        <select ref={ref => air = ref} onChange={handleChange}>
          <option value={1} selected={Number(props.data!.air) === 1}>Available</option>
          <option value={0} selected={Number(props.data!.air) === 0}>Unavailable</option>
        </select>
      </div>
      <div className="field">
        <label>Engine</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => engine = ref} onChange={handleChange} defaultValue={props.data!.engine!}/>
      </div>
      <div className="field">
        <label>Breaks</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => breaks = ref} onChange={handleChange} defaultValue={props.data!.breaks!}/>
      </div>
      <div className="field">
        <label>Colors</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => colors = ref} onChange={handleChange} defaultValue={props.data!.colors!}/>
      </div>
      <div className="field">
        <label>Power Windows</label>
        <select ref={ref => power = ref} onChange={handleChange}>
          <option value={1} selected={Number(props.data!.power) === 1}>Available</option>
          <option value={0} selected={Number(props.data!.power) === 0}>Unavailable</option>
        </select>
      </div>
      <button className="ui button large blue">Next</button>
    </form>
  )
}