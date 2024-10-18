import React, { FC } from "react";
const iconSelect = require('../../assets/iconSelect.png');

interface Props {
    rows: number,
}

const Textarea = ({ placeholder, props }: {placeholder: string, props?: Props }) => {
    return (
        <textarea placeholder={placeholder} rows={props?.rows} className="bg-[#F5F5F5] py-[12px] px-[26px] text-[#838383] rounded-[20px] w-full min-w-[150px] max-w-[600px] hover:bg-[#f0f0f0]" {...props}>

        </textarea>
    );
}

export { Textarea };