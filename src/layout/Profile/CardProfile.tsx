import React from 'react';
// import { Navbar } from '../../components/Navbar/Navbar';
import { InputFile } from '../../components/Inputs/InputFile';

import { Textarea } from '../../components/Textareas/Textarea';
import { InputProfile } from './InputProfile';
// const tmpImage = require('../../assets/tmp2.png');
const iconPlus = require('../../assets/iconPlus.png');
const tmp3 = require('../../assets/tmp3.png');

const CardProfile = () => {
  return (
    <section className='z-40 relative p-5 bg-white mx-[30px] rounded-[50px] overflow-y-auto'>
      <div className='flex justify-between mb-8 gap-10'>
        <div className='flex flex-row gap-6 min-w-[580px] max-w-[750px] w-full'>
          <form method="post">
            <label htmlFor="file-upload" className="flex justify-center items-center bg-[#F5F5F5] h-[320px] w-[300px] rounded-[30px] hover:bg-[#f0f0f0]">
              <img src={iconPlus} alt=''></img>
              <InputFile name="fileImageCompany" id="file-upload" /> {/* Rewrite attributs */}
            </label>
          </form>
          <form className='flex flex-col gap-5 w-full'>
            <InputProfile placeholder='Название компании'></InputProfile>
            <Textarea placeholder='Описание' props={{ rows: 4 }}></Textarea>
            <Textarea placeholder='Дополнительная информация' props={{ rows: 3 }}></Textarea>
          </form>
        </div>
        <div>
          <h3 className='text-[20px] block whitespace-nowrap mb-5 text-right'>Добавьте социальные сети</h3>
          <div className='flex flex-wrap justify-end gap-4'>
            <button className='bg-[#F5F5F5] p-[19px] rounded-[16px] hover:bg-[#f0f0f0]'>
              <img src={iconPlus} className='w-16 h-16'></img>
            </button>
            <button className='bg-[#F5F5F5] p-[19px] rounded-[16px] hover:bg-[#f0f0f0]'>
              <img src={iconPlus} className='w-16 h-16'></img>
            </button>
            <button className='bg-[#F5F5F5] p-[19px] rounded-[16px] hover:bg-[#f0f0f0]'>
              <img src={iconPlus} className='w-16 h-16'></img>
            </button>
            <button className='bg-[#F5F5F5] p-[19px] rounded-[16px] hover:bg-[#f0f0f0]'>
              <img src={iconPlus} className='w-16 h-16'></img>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-[44px] mb-6'>Наши проекты</h2>
        <div className='grid grid-cols-3 justify-center items-center gap-4'>
          <img src={tmp3} alt="tmpimage" className='w-full h-[320px]' /> {/*  */}
          <div>
            <form method="post" className='h-[320px]'>
              <label htmlFor="file-upload" className="flex justify-center items-center bg-[#F5F5F5] h-full w-full rounded-[30px] hover:bg-[#f0f0f0]">
                <img src={iconPlus} alt=''></img>
                <InputFile name="fileImageCompany" id="file-upload" /> {/* Rewrite attributs */}
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProfile;