import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { AllEmployees } from "./AllEmployees";

const ListEmployees = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <AllEmployees></AllEmployees>
        </React.Fragment>
    );
}

export { ListEmployees }