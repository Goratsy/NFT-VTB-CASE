import React, { FC } from "react";

const ButtonFieldBlack = ({children, ...props}: {children: any, props?: object}) => {
    console.log(typeof children);
    return (
        <React.Fragment>
            <button className={`lg:py-[12px] lg:px-[25.5px] py-[6px] px-[13px] text-white rounded-full bg-[#000]`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonFieldBlack };