import React, { FC } from "react";

const ButtonFieldBlue = ({children, ...props}: {children: React.ReactNode, props?: object}) => {
    console.log(typeof children);
    return (
        <React.Fragment>
            <button className={`flex justify-center items-center gap-4 flex-row lg:py-[12px] lg:px-[26px] py-[6px] px-[13px] text-white rounded-full bg-[#005EFF] whitespace-nowrap cursor-pointer hover:bg-[#141BEA] ease-in-out duration-500`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlue };