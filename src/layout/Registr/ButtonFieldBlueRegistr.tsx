import React, { FC } from "react";

const ButtonFieldBlueRegistr = ({children, ...props}: {children: any, props?: object}) => {
    console.log(typeof children);
    return (
        <React.Fragment>
            <button className={`sm:py-[12px] sm:px-[66px] py-[8px] px-[33px] text-white rounded-full bg-[#005EFF] whitespace-nowrap cursor-pointer hover:bg-[#141BEA] ease-in-out duration-500`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlueRegistr };