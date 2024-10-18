import React from "react";
import { FiltersEmployees } from "./FiltersEmployees";
import { TableEmployees } from "./TableEmployees";
import { listEmployees } from "../../testData/listEployees";

const AllEmployees = () => {
    return (
        <>
            <section className="z-40 relative bg-white mx-[30px] rounded-[50px]">
                <FiltersEmployees></FiltersEmployees>
                <TableEmployees listEmployees={listEmployees}></TableEmployees>    
            </section>
        </>
    );
}

export { AllEmployees }