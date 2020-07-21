import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

type Props = {
  handleNext: (data: any) => void;
}

export function InformationTab(props: Props) {
  let title: HTMLInputElement | null = null;
  let price: HTMLInputElement | null = null;
  let type: HTMLInputElement | null = null;
  let year: HTMLInputElement | null = null;
  let image: HTMLInputElement | null = null;

  const [url, setUrl] = useState<any[]>([]);
  const [loaded, setLoad] = useState(false);
  const firebase = useFirebase();

  const handleNext = (e: any) => {
    e.preventDefault();

    if(url.length === 0) return alert('please wait for image upload done!');

    const data = {
      title: title!.value,
      price: price!.value,
      type: type!.value,
      year: year!.value,
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
        const x = await uploadFile(img);
        items.push(x);
      }
      setUrl(items)
      setLoad(false);
    }
  }

  const uploadFile = async (file: File) => {
    const storageRef = await firebase.storage().ref();
    const fileRef = await storageRef.child(file.name);
    const ref = fileRef.put(file);
    if((await ref).state === "success"){
      return ref.snapshot.ref.getDownloadURL();
    }
  }

  return (
    <form className="ui form large" onSubmit={handleNext}>
      <div className="field">
        <label>Property Title</label>
        <input type="text" placeholder="Enter car name..." required ref={ref => title = ref}/>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Price</label>
          <input type="number" placeholder="Enter price..." step={0.1} required ref={ref => price = ref}/>
        </div>
        <div className="field">
          <label>Type</label>
          <input type="text" placeholder="Type car is new or popular?" required ref={ref => type = ref}/>
        </div>
      </div>
      <div className="field">
        <label>Year</label>
        <input type="text" placeholder="Year are make" required ref={ref => year = ref}/>
      </div>
      <div className="field">
        <label>Image</label>
        <input type="file" placeholder="Enter car name..." onChange={handleImage} multiple={true} ref={ref => image = ref}/>
      </div>
      <div>
        {
          loaded ?
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