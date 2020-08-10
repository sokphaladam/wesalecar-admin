import React from 'react';

interface Props extends 
  React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>
{
  label: string;
}

export function TextInput(props: Props){
  return(
    <div className="field">
      <label>{props.label}</label>
      <input {...props}/>
    </div>
  )
}