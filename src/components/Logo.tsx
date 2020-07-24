import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link className="logo-box" to="#">
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
    </Link>
  )
}