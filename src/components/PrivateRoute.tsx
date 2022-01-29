import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  component: React.ComponentType
  path?: string
}


const PrivateRoute:FC<Props> = ({component:RouteComponent, path}) => {
  const auth = true
  if(auth) {
    return <RouteComponent/>
  }

  return <Navigate to={path ? path : '/'}/>;
};

export default PrivateRoute;