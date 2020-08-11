import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";

interface Props {
  images: string[];
  onChange: (images: string[]) => void;
  onUploading: () => void;
  onUploaded: () => void;
}

export function UploadComponent(props: Props) {
  const [loaded, setLoad] = useState(false);
  const [percent, setPercent] = useState(0);
  const firebase = useFirebase();

  const uploadFile = async (file: File) => {
    const storageRef = await firebase.storage().ref();
    const fileRef = await storageRef.child(file.name);
    const ref = fileRef.put(file);
    if ((await ref).state === "success") {
      return await ref.snapshot.ref.getDownloadURL();
    }
  }

  const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoad(true);
    setPercent(0);
    props.onUploading();
    if (e.target.files !== undefined) {
      const files: any[] = (e.target.files as any);
      const items = props.images;
      for (let i = 0; i < files.length; i++) {
        const x: any = await uploadFile(files[i]);
        await items.push(x);
        await setPercent(i * (100 / files.length));
      }

      props.onChange(items);
      props.onUploaded();
    }
    setLoad(false);
  }

  return (
    <>
      <div className="field">
        <label>Upload Image</label>
        <input type="file" multiple onChange={onChangeInput} />
      </div>
      {
        loaded || props.images === undefined ?
          <div className="ui active blue progress " style={{ width: '100%', height: '10%' }}>
            <div className="bar" style={{ width: percent.toFixed(2) + "%" }}>
              <div className="progress" style={{ backgroundColor: 'transparent' }}>{percent.toFixed(2) + "%"}</div>
            </div>
          </div> :
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              props.images.map((x: any, i: number) => {
                return (
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', width: 145, height: 120, backgroundColor: 'rgba(255,255,255,.4)' }} />
                    <img src={x} alt="" key={i} style={{ width: 145, height: 120, objectFit: 'cover' }} />
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
                      onClick={() => props.onChange(props.images.filter((img, index) => index !== i))}
                    ></i>
                  </div>
                )
              })
            }
          </div>
      }
    </>
  );
}
