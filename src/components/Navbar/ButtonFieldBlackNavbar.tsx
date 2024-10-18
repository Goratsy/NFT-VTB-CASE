import React, { FC } from "react";

const ButtonFieldBlackNavbar = ({children, ...props}: {children: React.ReactNode, props?: object}) => {
    return (
        <React.Fragment>
            <button className={`flex justify-center items-center gap-[14px] flex-row min-w-[70px]  lg:py-[12px] px-[9px] pr-3 py-[6px] text-white rounded-full bg-[#000] cursor-pointer hover:bg-[#313131] ease-in-out duration-500 overflow-y-auto`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlackNavbar };