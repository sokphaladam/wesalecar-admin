import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";

interface Props {
  images: string[];
  onChange: (images: string[]) => void;
}

export function UploadComponent(props: Props) {
  const [loaded, setLoad] = useState(false);
  const firebase = useFirebase();

  const uploadFile = async (file: File) => {
    const storageRef = await firebase.storage().ref();
    const fileRef = await storageRef.child(file.name);
    const ref = fileRef.put(file);
    if((await ref).state === "success"){
      return await ref.snapshot.ref.getDownloadURL();
    }
  }

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoad(true);
    if(e.target.files !== undefined){
      const files: any[] = (e.target.files as any);
      const items = props.images;
      for(const file of files){
        const x: any = await uploadFile(file);
        items.push(x);
      }

      props.onChange(items);
    }
    setLoad(false);
  }

  return (
    <>
      <div className="field">
        <label>Upload Image</label>
        <input type="file" multiple onChange={onChangeInput}/>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          loaded || props.images === undefined ?
          <div>Load Data...</div>:
          props.images.map((x: any, i: number) => {
            return (
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', width: 145, height: 120, backgroundColor: 'rgba(255,255,255,.4)' }}/>
                <img src={x} alt="" key={i} style={{ width: 145, height: 120, objectFit: 'cover' }}/>
                <i 
                  className="menu-icon mdi mdi-close-circle" 
                  style={{ 
                    position: 'absolute', 
                    bottom: 10, 
                    right: 10, 
                    fontSize: 15, 
                    color: 'red', 
                    cursor: 'pointer'
                  }}
                  onClick={()=>props.onChange(props.images.filter((img, index) => index !== i))}
                ></i>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
