import React, { FC } from "react";
const iconLoupe = require('../../assets/iconLoupe.png');

const InputWithIcon = ({ placeholder, ...props }: { placeholder: string, props?: object }) => {
    return (
        <div className="relative flex items-center">
            <img src={iconLoupe} className="absolute ml-[22px]" alt="iconInput"></img>
            <input placeholder={placeholder} {...props} className="bg-[#F5F5F5] py-[12px] pl-[54px] pr-[26px] text-[#838383] rounded-[20px] w-full min-w-[140px] max-w-[400px] hover:bg-[#f0f0f0] ease-in-out duration-500 focus:border-[#005EFF]" />
        </div>

    );
}

export { InputWithIcon };