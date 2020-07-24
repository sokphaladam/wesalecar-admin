import React from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';

export function UserScreen(){
  const firebase = useFirebase();
  return(
    <Content>

    </Content>
  )
}

async function DocumentUsers(){
  
}