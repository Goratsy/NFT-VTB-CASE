import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import CardProfile from './CardProfile';
const imageLogo = require('../../assets/image.png');

const Profile = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <img src={imageLogo} alt="logoCompany" className="absolute w-[380px] h-auto -left-[192px] top-[40px]" />
      <img src={imageLogo} alt="logoCompany" className="absolute w-[840px] h-auto -right-[600px] top-[230px]" />
      <Navbar></Navbar>
      <CardProfile></CardProfile>
    </div>
  );
}

export default Profile;