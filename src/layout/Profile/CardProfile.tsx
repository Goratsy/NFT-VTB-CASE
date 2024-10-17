import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


const CardProfile = () => {
  return (
    <section>
      <img src='../../assets/tmpImageLogo.png' alt='profileImage' />
      <div>
        <h2>Название</h2>
        <span>информация</span>
      </div>
    </section>
  );
}

export default CardProfile;