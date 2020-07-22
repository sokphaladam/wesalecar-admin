import React from 'react';
import { HeaderComponent } from './HeaderComponent';

export function Content(props: any){
  return(
    <div className="page-content">
      <HeaderComponent/>
      <div className="page-inner">
        {
          props.children
        }
      </div>
    </div>
  )
}