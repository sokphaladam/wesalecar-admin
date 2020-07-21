import React from 'react';

type Props = {
  handleNext: (data: any) => void;
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
    const data = {
      overviews: overviews!.value,
      fuel: fuel!.value,
      seat: seat!.value,
      air: air!.value,
      engine: engine!.value,
      breaks: breaks!.value,
      colors: colors!.value,
      power: power!.value
    }

    props.handleNext(data);
  }

  return (
    <form className="ui form large" onSubmit={handleNext}>
      <div className="field">
        <label>Overview</label>
        <textarea placeholder="Text something..." required ref={ref => overviews = ref}></textarea>
      </div>
      <div className="field">
        <label>Fuel Type</label>
        <input type="text" placeholder="Enter fuel type..." required ref={ref => fuel = ref}/>
      </div>
      <div className="field">
        <label>Seating</label>
        <input type="number" placeholder="Enter seating..." required ref={ref => seat = ref}/>
      </div>
      <div className="field">
        <label>Air Bags</label>
        <select required ref={ref => air = ref}>
          <option value={1}>Available</option>
          <option value={0}>Unavailable</option>
        </select>
      </div>
      <div className="field">
        <label>Engine</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => engine = ref}/>
      </div>
      <div className="field">
        <label>Breaks</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => breaks = ref}/>
      </div>
      <div className="field">
        <label>Colors</label>
        <input type="text" placeholder="Enter engine..." required ref={ref => colors = ref}/>
      </div>
      <div className="field">
        <label>Power Windows</label>
        <select ref={ref => power = ref}>
          <option value={1}>Available</option>
          <option value={0}>Unavailable</option>
        </select>
      </div>
      <button className="ui button large blue">Next</button>
    </form>
  )
}