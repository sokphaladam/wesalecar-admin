import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CarScreen } from '../screens/Cars/CarScreen';
import { CarCreateScreen } from '../screens/Cars/CarCreateScreen';
import {CarEditScreen} from '../screens/Cars/CarEditScreen';
import { MakeCreateScreen } from '../screens/Makes/MakeCreateScreen';
import { MakeEditScreen } from '../screens/Makes/MakeEditScreen';
import { MakeScreen } from '../screens/Makes/MakeScreen';
import { ModelCreatScreen } from '../screens/Models/ModeCreateScreen';
import { ModelScreen } from '../screens/Models/ModelScreen';
import { ModelEditScreen } from '../screens/Models/ModelEditScreen';


const routes: any = [
  {
    component: CarScreen,
    path: '/cars',
    exact: true
  },
  {
    component: CarCreateScreen,
    path: '/cars/create',
    exact: true
  },
  {
    component: CarEditScreen,
    path: '/cars/edit/:id',
    exact: true
  },
  {
    component: MakeCreateScreen,
    path: '/makes/create',
    exact: true
  },
  {
    component: MakeScreen,
    path: '/makes',
    exact: true
  },
  {
    component: MakeEditScreen,
    path: '/makes/edit/:id',
    exact: true
  },
  {
    component: ModelCreatScreen,
    path: '/models/create',
    exact: true
  },
  {
    component: ModelScreen,
    path: '/models',
    exact: true
  },
  {
    component: ModelEditScreen,
    path: '/models/edit/:id',
    exact: true
  },
]

export function RouteIndex(){
  return(
    <Switch>
      {
        routes.map((x: any) => {
          return <Route {...x} key={x.path}/>
        })
      }
    </Switch>
  )
}