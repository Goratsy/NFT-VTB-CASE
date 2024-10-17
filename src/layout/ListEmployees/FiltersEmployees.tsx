import React from "react";
import { Select } from "../../components/Selects/Select";

const FiltersEmployees = () => {
    return (
        <div>
            <Select listItems={['ФИО', 'Должность', 'Дата найма', 'Стек']}></Select>
            <Select listItems={['От А до Я', 'От Я до А']}></Select>
        </div>
    );
}

export { FiltersEmployees }