import React, { createContext, useEffect, useState } from 'react';
import { RegistrLogin } from './layout/Registr_Login/Registr_Login';
import { Registr } from './layout/Registr/Registr';
import { ListEmployees } from './layout/ListEmployees/ListEmployees';
import Profile from './layout/Profile/Profile';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { NotFound } from './layout/NotFound/NotFound';
import { registrCompany, verifyWorkExperience } from './SwaggerInteractionWithServer/Company';

type User = {
  userId?: string,
  setUserId?: Function,
  userRole?: string,
  setUserRole?: Function
}

const defaultUser = {};
const UserContext = React.createContext<User>(defaultUser);

function App() {
  const [userId, setUserId] = useState('');
  const [userRole, setUserRole] = useState('');
  
  return (
    <React.Fragment>
      <UserContext.Provider value={{userId, setUserId, userRole, setUserRole}}>
        <Routes>
          <Route path='/' element={<RegistrLogin />} />
          <Route path="/registration" element={<Registr />} />
          <Route path="/listemployees" element={<ListEmployees />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserContext.Provider>

    </React.Fragment>
  );
}
export {UserContext};
export default App;
