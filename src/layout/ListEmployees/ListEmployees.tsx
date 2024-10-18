import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { AllEmployees } from "./AllEmployees";
const imageLogo = require('../../assets/image.png');

const ListEmployees = () => {
    return (
        <section className="relative overflow-hidden w-full">
            <img src={imageLogo} alt="logoCompany" className="absolute w-[380px] h-auto -left-[192px] top-[40px]"/>
            <img src={imageLogo} alt="logoCompany" className="absolute w-[840px] h-auto -right-[600px] top-[230px]"/>
            <Navbar></Navbar>
            <AllEmployees></AllEmployees>
        </section>
    );
}

export { ListEmployees }