import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { AllEmployees } from "./AllEmployees";
const imageLogo = require('../../assets/image.png');

const ListEmployees = () => {
    return (
        <React.Fragment>
            <img src={imageLogo} alt="logoCompany" className="absolute"/>
            <img src={imageLogo} alt="logoCompany" className="absolute"/>
            <Navbar></Navbar>
            <AllEmployees></AllEmployees>
        </React.Fragment>
    );
}

export { ListEmployees }