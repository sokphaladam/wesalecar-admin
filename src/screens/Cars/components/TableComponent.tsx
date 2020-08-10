import React, { useState } from 'react';

interface Props {
  data: any;
  dataDummy: any[];
  onChange: (data: any) => void;
}

export function TableComponent(props: Props){
  const [index, setIndex] = useState(-1);
  
  return(
    <table className="ui celled striped table">
      <tbody>
        {
          props.dataDummy.map((x, i) => {
            return (
              <tr style={{ alignItems: 'center' }} key={i}>
                <td>{x.name}</td>
                <td
                  style={{
                    border: index === i ? '1px solid #1e90ff' : ''
                  }}
                >
                  {
                    x.type === 'input' ? <input
                      autoFocus={i === 0}
                      style={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}
                      value={props.data[x.field] || ""}
                      onChange={e => props.onChange({ ...props.data, [x.field]: e.target.value })}
                      onFocus={() => setIndex(i)}
                      onBlur={() => setIndex(-1)}
                      placeholder="Text here..."
                    /> :
                      <select
                        style={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}
                        value={props.data[x.field]}
                        onChange={e => props.onChange({ ...props.data, [x.field]: e.target.value })}
                      >
                        {
                          x.option!.map((y: any) => {
                            return <option value={y.value + ""} key={y.key}>{y.label}</option>
                          })
                        }
                      </select>
                  }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}