import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import CardProfile from './CardProfile';


const Profile = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <CardProfile></CardProfile>
    </React.Fragment>
  );
}

export default Profile;