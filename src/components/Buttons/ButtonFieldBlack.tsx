import React, { FC } from "react";

const ButtonFieldBlack = ({children, ...props}: {children: React.ReactNode, props?: object}) => {
    return (
        <React.Fragment>
            <button className={`flex justify-center items-center gap-4 flex-row lg:py-[12px] lg:px-[25.5px] py-[6px] px-[13px] text-white rounded-full bg-[#000] cursor-pointer hover:bg-[#313131]`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlack };