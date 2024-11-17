import React, { FC, useContext, useEffect } from "react";
import { FormRegistr } from "./FormRegist";
const imageLogo = require('../../assets/logo_1_1.png');


const Registr = () => {
    
    return (
        <section className="flex items-center justify-center flex-col sm:mx-16 mx-4">
            <img src="../../assets/image.png" alt="bgimage" className="absolute sm:top-4 top-10 sm:w-[480px] w-[320px]"/>
            <div className="relative w-full flex justify-center items-center flex-col bg-white mx-16 my-40 rounded-[50px]">
                <img src={imageLogo} alt="logoCompany" className="my-24"/>
                <FormRegistr></FormRegistr>
            </div>
        </section>
    );
}

export { Registr };