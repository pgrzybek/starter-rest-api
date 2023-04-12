// To use PrivateRoute, in App.js, wrap the component that should only be visible to authenticated users:
// <PrivateRoute path="/protected" component={ProtectedPage} />

import { Navigate, Outlet } from 'react-router-dom';
import {useContext} from "react";
import {UserContext} from './UserContext';

export default function PrivateRoute() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    const isAuthenticated = userInfo && Object.keys(userInfo).length !== 0 ? true : false;

    // console.log(`privateRoute.js userInfo ${JSON.stringify(userInfo)}`)
  
  {/* outlet used by parent route elements to render their child route elements ie in App.js the layout route encloses all the other routes */}
  return (
      isAuthenticated ? <Outlet /> : <Navigate to="/" />
  );
}

