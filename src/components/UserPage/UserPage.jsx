import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from '@mui/material';

function UserPage(props) {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store?.user);
  return (
      <Dashboard user={user} />
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
