import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


const CardProfile = () => {
  return (
    <section className='z-40 relative p-5 bg-white mx-[30px] rounded-[50px]'>
      <img src='../../assets/tmpImageLogo.png' alt='profileImage' />
      <div>
        <h2>Название</h2>
        <span>информация</span>
      </div>
    </section>
  );
}

export default CardProfile;