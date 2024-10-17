import React from "react";
import { FiltersEmployees } from "./FiltersEmployees";

const TableEmployees = ({ listEmployees }: { listEmployees: string[][] }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>ФИО</th>
                    <th>Должность</th>
                    <th>Дата найма</th>
                    <th>Стек</th>
                </tr>
                {listEmployees.map((array: Array<string>) => {
                    return (
                        <tr>
                            {array.map((item: string) => <td>{item}</td>)}
                        </tr>
                    );
                })}
            </table>

            {/* <div>
                <div>
                    <span>ФИО</span>
                    <span>Должность</span>
                    <span>Дата найма</span>
                    <span>Стек</span>
                </div>
                
                {listEmployees.map((array: Array<string>) => {
                    return (
                        <div>
                            {array.map((item: string) => <span>{item}</span>)}
                        </div>
                    );
                })}
            </div> */}

        </div>
    );
}

export { TableEmployees }