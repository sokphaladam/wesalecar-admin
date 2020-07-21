import React from 'react';

export function Content(props: any){
  return(
    <div className="page-content">
      <div className="page-header"></div>
      <div className="page-inner">
        {
          props.children
        }
      </div>
    </div>
  )
}