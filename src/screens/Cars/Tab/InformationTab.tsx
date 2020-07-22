/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { BasicInformationType } from '../../../libs/DataType';

type Props = {
  handleNext: (data: any) => void;
  handleChange: (data: any) => void;
  data?: BasicInformationType;
  type: 'create' | 'edit';
}

export function InformationTab(props: Props) {
  let title: HTMLInputElement | null = null;
  let price: HTMLInputElement | null = null;
  let type: HTMLInputElement | null = null;
  let year: HTMLInputElement | null = null;
  let image: HTMLInputElement | null = null;

  const [url, setUrl] = useState(props.type === 'create'? [] : props.data!.image!);
  const [loaded, setLoad] = useState(false);
  const firebase = useFirebase();

  const handleNext = (e: any) => {
    e.preventDefault();

    if(url.length === 0) return alert('please wait for image upload done!');

    const data: BasicInformationType = {
      title: title!.value,
      price: Number(price!.value),
      type: type!.value,
      year: Number(year!.value),
      image: url
    }

    props.handleNext(data);
  }

  const handleImage = async (e: any) => {
    setLoad(true);
    const res: File[] = e.target.files;
    const items = url;
    if(res !== undefined){
      for(const img of res){
        const x: any = await uploadFile(img);
        items.push(x);
      }
      await setUrl(items)
      await setLoad(false);
    }
  }

  const handleChange = () => {
    const data: BasicInformationType = {
      title: title!.value,
      price: Number(price!.value),
      type: type!.value,
      year: Number(year!.value),
      image: url
    }
    props.handleChange(data);
  }

  const uploadFile = async (file: File) => {
    const storageRef = await firebase.storage().ref();
    const fileRef = await storageRef.child(file.name);
    const ref = fileRef.put(file);
    if((await ref).state === "success"){
      return ref.snapshot.ref.getDownloadURL();
    }
  }

  useEffect(() => {
    setUrl(props.data!.image!);
  }, [props.data])

  return (
    <form className="ui form large" onSubmit={handleNext}>
      <div className="field">
        <label>Property Title</label>
        <input type="text" placeholder="Enter car name..." required ref={ref => title = ref} onChange={handleChange} defaultValue={props.type === 'create'? '' : props.data!.title!}/>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Price</label>
          <input type="number" placeholder="Enter price..." step={0.1} required ref={ref => price = ref} onChange={handleChange} defaultValue={props.type === 'create'? '' : props.data!.price!}/>
        </div>
        <div className="field">
          <label>Type</label>
          <input type="text" placeholder="Type car is new or popular?" required ref={ref => type = ref} onChange={handleChange} defaultValue={props.type === 'create'? '' : props.data!.type!}/>
        </div>
      </div>
      <div className="field">
        <label>Year</label>
        <input type="number" placeholder="Year are make" required ref={ref => year = ref} onChange={handleChange} defaultValue={props.type === 'create'? '' : props.data!.year!}/>
      </div>
      <div className="field">
        <label>Image</label>
        <input 
          type="file" 
          placeholder="Enter car name..." 
          onChange={e => {
            handleImage(e);
            if(!loaded) handleChange();
          }}
          multiple={true} 
          ref={ref => image = ref}
        />
      </div>
      <div>
        {
          loaded || url === undefined ?
          <div>Load Data...</div>:
          url.map((x: any, i: number) => {
            return <img src={x} alt="" key={i} style={{ width: 100, height: 60 }}/>
          })
        }
      </div>
      <br/>
      <button className="ui button large blue">Next</button>
    </form>
  )
}