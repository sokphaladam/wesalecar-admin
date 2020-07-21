import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CarScreen } from '../screens/Cars/CarScreen';
import { CarCreateScreen } from '../screens/Cars/CarCreateScreen';


const routes = [
  {
    component: CarScreen,
    path: '/cars',
    exact: true
  },
  {
    component: CarCreateScreen,
    path: '/cars/create',
    exact: true
  }
]

export function RouteIndex(){
  return(
    <Switch>
      {
        routes.map(x => {
          return <Route {...x} key={x.path}/>
        })
      }
    </Switch>
  )
}