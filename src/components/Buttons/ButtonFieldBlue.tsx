import React, { FC } from "react";

const ButtonFieldBlue = ({children, func, ...props}: {children: React.ReactNode, func?: any, props?: object}) => {
    return (
        <React.Fragment>
            <button onClick={func} className={`flex justify-center items-center gap-4 flex-row lg:py-[12px] lg:px-[26px] py-[6px] px-[13px] text-white rounded-full bg-[#005EFF] whitespace-nowrap cursor-pointer hover:bg-[#141BEA]`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlue };