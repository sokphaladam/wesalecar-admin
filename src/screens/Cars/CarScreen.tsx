import React from 'react';
import { Content } from '../../components/Content';
import { Link } from 'react-router-dom';

export function CarScreen(){
  return(
    <Content>
      <Link to="/cars/create" className="btn btn-dark btn-sm">Create New Car</Link>
    </Content>
  )
}