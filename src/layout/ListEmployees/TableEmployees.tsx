import React from "react";
import { FiltersEmployees } from "./FiltersEmployees";
const logoProfile = require('../../assets/Container.png')

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

            {/* <div className="grid gap-y-[10px] items-center gap-x-3 flex-wrap overflow-y-auto pb-5 px-5 whitespace-nowrap">

                <span className="py-3  w-fit">ФИО</span>
                <span className="py-3  w-fit">Должность</span>
                <span className="py-3  w-fit">Дата найма</span>
                <span className="py-3  w-fit">Стек</span>

                {listEmployees.map((array: Array<string>) => {
                    return (
                        <>
                            <span className="py-3 inline-block w-fit ">
                                <img src={logoProfile} className="inline mr-2"></img>
                                {array[0]}
                            </span>
                            <span className="py-3 inline-block w-fit text-[#1B1F3BA6]">{array[1]}</span>
                            <span className="py-3 inline-block w-fit text-[#1B1F3BA6]">Дата {array[2]}</span>
                            <span className="py-3 inline-block w-fit text-[#1B1F3BA6]">{array[3]}</span>
                        </>
                    );
                })}
            </div> */}
            <div className="overflow-hidden">
                <div className="relative overflow-y-auto min-w-96 w-full whitespace-nowrap">
                    <table className="table-auto mx-5 mb-5 w-full">
                        <thead className="text-left">
                            <tr className="mb-6">
                                <th className="font-normal">ФИО</th>
                                <th className="font-normal">Должность</th>
                                <th className="font-normal">Дата найма</th>
                                <th className="font-normal">Стек</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listEmployees.map((array: Array<string>) => {
                                return (
                                    <>
                                        <tr className="py-3">
                                            <td className="py-3 pr-[50px]">
                                                <img src={logoProfile} className="inline mr-2"></img>
                                                {array[0]}
                                            </td>
                                            <td className="py-3 pr-[50px] text-[#1B1F3BA6]">{array[1]}</td>
                                            <td className="py-3 pr-[50px] text-[#1B1F3BA6]">Дата {array[2]}</td>
                                            <td className="py-3 text-[#1B1F3BA6]">{array[3]}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}

export { TableEmployees }