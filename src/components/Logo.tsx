import React from 'react';

export function Logo() {
  return (
    <a className="logo-box" href="index.html">
      <span>
        <i 
          className="mdi mdi-chemical-weapon"
          id="fixed-sidebar-toggle-button"
        ></i> 
        <span>wesalecar</span> 
      </span>
      <i
        className="mdi mdi-close"
        id="sidebar-toggle-button-close"
      ></i>
    </a>
  )
}