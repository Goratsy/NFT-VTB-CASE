import React, { FC } from "react";
const iconSelect = require('../../assets/iconSelect.png');

const Select = ({ listItems, ...proos }: { listItems: Array<string>, props?: object }) => {
    return (
        <div className="relative flex items-center">
            <img src={iconSelect} alt="arrow" className="absolute right-2"></img>
            <select className="bg-[#F8F8F8] py-[10px] pl-[24px] pr-[50px] rounded-full min-w-36">
                <option value={'empty'} key={'empty'}>Выбрать</option> {/* Rewrite */}
                {listItems.map((item: string) => {
                    return (
                        <option value={item} key={item}>{item}</option>
                    ); {/* Rewrite */ }
                })}
            </select>
        </div>
    );
}

export { Select };