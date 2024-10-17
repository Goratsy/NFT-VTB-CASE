import React from "react";
import { FiltersEmployees } from "./FiltersEmployees";
import { TableEmployees } from "./TableEmployees";
import { listEmployees } from "../../testData/listEployees";

const AllEmployees = () => {
    return (
        <>
            <section>
                <FiltersEmployees></FiltersEmployees>
                <TableEmployees listEmployees={listEmployees}></TableEmployees>    
            </section>
        </>
    );
}

export { AllEmployees }