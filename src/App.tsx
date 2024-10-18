import React from 'react';
import { RegistrLogin } from './layout/Registr_Login/Registr_Login';
import { Registr } from './layout/Registr/Registr';
import { ListEmployees } from './layout/ListEmployees/ListEmployees';
import Profile from './layout/Profile/Profile';

function App() {
  return (
    <React.Fragment>
      {/* <RegistrLogin></RegistrLogin> */}
      {/* <Registr></Registr> */}
      {/* <ListEmployees></ListEmployees> */}
      <Profile></Profile>
    </React.Fragment>
  );
}

export default App;
