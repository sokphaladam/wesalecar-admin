import React from 'react';

interface Props {
  label: string;
}

export function Loading(props: Props){
  return(
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">{props.label}</div>
    </div>
  )
}
