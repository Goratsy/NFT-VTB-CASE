import React, { FC } from "react";

const Input = ({placeholder, ...proos}: {placeholder: string, props?: object}) => {
    return (
        <input placeholder={placeholder} {...proos} className="bg-[#F5F5F5] py-[12px] px-[26px] text-[#838383] rounded-[20px] w-full min-w-[100px] max-w-[400px] hover:bg-[#f0f0f0] ease-in-out duration-500"/>
    );
}

export { Input };