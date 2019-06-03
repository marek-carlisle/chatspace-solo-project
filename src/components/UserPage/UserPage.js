import React from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


const UserPage = (props) => {
  const user = useSelector((redux) => redux.user)

  return (

    <div>
      <h1 id="welcome">
        Welcome, {user.username}!
    </h1>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="log-in" />
    </div>
  );
}


// this allows us to use <App /> in index.js
export default UserPage;
