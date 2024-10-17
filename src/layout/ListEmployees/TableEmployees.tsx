import React from "react";
import { FiltersEmployees } from "./FiltersEmployees";

const TableEmployees = ({ listEmployees }: { listEmployees: string[][] }) => {
    return (
        <>
            {/* <div className="flex flex-col gap-[10px] overflow-y-auto">
            <div className="flex flex-row gap-5 justify-between">
                <span className="max-w-[600px] w-full whitespace-nowrap">ФИО</span>
                <span className="max-w-[500px] w-full whitespace-nowrap">Должность</span>
                <span className="max-w-[400px] w-full whitespace-nowrap">Дата найма</span>
                <span className="max-w-[500px] w-full whitespace-nowrap">Стек</span>
            </div>

            {listEmployees.map((array: Array<string>) => {
                return (
                    <div className="flex flex-row gap-5 justify-between" key={Math.random()}> 
                        <span className="max-w-[600px] w-full whitespace-nowrap">{array[0]}</span>
                        <span className="max-w-[500px] w-full whitespace-nowrap">{array[1]}</span>
                        <span className="max-w-[400px] w-full whitespace-nowrap">Дата {array[2]}</span>
                        <span className="max-w-[500px] w-full whitespace-nowrap">{array[3]}</span>
                    </div>
                );
            })}
        </div> */}

            <div className="grid grid-cols-4 gap-y-[10px] gap-x-3 flex-nowrap overflow-y-auto">

                <span className="whitespace-nowrap">ФИО</span>
                <span className="whitespace-nowrap">Должность</span>
                <span className="whitespace-nowrap">Дата найма</span>
                <span className="whitespace-nowrap">Стек</span>

                {listEmployees.map((array: Array<string>) => {
                    return (
                        <>
                            <span className="whitespace-nowrap">{array[0]}</span>
                            <span className="whitespace-nowrap text-[#1B1F3BA6]">{array[1]}</span>
                            <span className="whitespace-nowrap text-[#1B1F3BA6]">Дата {array[2]}</span>
                            <span className="whitespace-nowrap text-[#1B1F3BA6]">{array[3]}</span>
                        </>
                    );
                })}
            </div>
        </>

    );
}

export { TableEmployees }