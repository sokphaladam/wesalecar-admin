import React from 'react';

interface Props extends
  React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
  > {
  label: string;
  children: React.ReactNode;
}

export function SelectInput(props: Props) {
  return (
    <div className="field">
      <label>{props.label}</label>
      <select {...props} className="ui small">
        {props.children}
      </select>
    </div>
  )
}