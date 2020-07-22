/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { MenuItem } from '../libs/MenuItem';
import { Logo } from './Logo';
import { Link, useHistory } from 'react-router-dom';

export function SideMenu() {
  const history = useHistory();
  const [index, setIndex] = useState(-1);
  const [subIndex, setSubIndex] = useState(-1);
  
  useEffect(()=>{
    MenuItem.map((x: any,i: number) => {
      if(x.items !== undefined) {
        const index = x.items.findIndex((i: any) => i.to === "/" + history.location.pathname.split('/')[1]);
        setIndex(i);
        setSubIndex(index);
      }
      else {
        if(x.to === history.location.pathname){
          setIndex(i);
        }
      }
    })
  })

  return (
    <div className="page-sidebar">
      <Logo />
      <div className="page-sidebar-inner">
        <div className="page-sidebar-menu">
          <ul className="accordion-menu">
            {
              MenuItem.map((x: any, i: number) => {
                return (
                  <li key={x.name} className={index === i ? 'open' : ''}>
                    <Link to={x.to} onClick={() => index === i ? setIndex(-1) : setIndex(i)}>
                      <i className={x.icon}></i>
                      <span>{x.name}</span>
                      {x.items !== undefined && <i className='accordion-icon fa fa-angle-right'></i>}
                    </Link>
                    {
                      x.items !== undefined &&
                      <ul className="sub-menu" style={{ display: index === i ? 'block' : 'none' }}>
                        {
                          x.items.map((y: any, j: number) => {
                            return (
                              <li key={y.name} className={index === i ? 'animation' : ''}>
                                <Link to={y.to} className={subIndex === j ? 'active': ''}>{y.name}</Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}