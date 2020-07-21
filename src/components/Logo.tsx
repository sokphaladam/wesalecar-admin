import React from 'react';

export function Logo() {
  return (
    <a className="logo-box" href="index.html">
      <span>
        <img 
          src="http://www.wesalecar.com/wp-content/uploads/2019/11/Logo-wesale-car-1.png" 
          alt=""
          className="mdi mdi-chemical-weapon"
          id="fixed-sidebar-toggle-button"
          style={{ width: 150, objectFit: 'cover' }}
        />
      </span>
      <i
        className="mdi mdi-close"
        id="sidebar-toggle-button-close"
      ></i>
    </a>
  )
}