import React, { FC } from "react";

const InputProfile = ({placeholder, ...proos}: {placeholder: string, props?: object}) => {
    return (
        <input placeholder={placeholder} {...proos} className="bg-[#F5F5F5] py-[12px] px-[26px] text-[#838383] rounded-[20px] w-full min-w-[150px] max-w-[600px] hover:bg-[#f0f0f0]"/>
    );
}

export { InputProfile };