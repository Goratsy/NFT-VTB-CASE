import React, { FC } from "react";

const InputFile = ({...proos}) => {
    return (
        <input type="file" {...proos} className="bg-[#F5F5F5] py-[12px] px-[26px] text-[#838383] rounded-[30px] w-full hover:bg-[#f0f0f0]"/>
    );
}

export { InputFile };