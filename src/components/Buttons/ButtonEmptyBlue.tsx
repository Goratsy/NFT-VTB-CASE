import React from "react";

const ButtonEmptyBlue = ({children, ...props}: {children: any, props?: object}) => {
    console.log(typeof children);
    return (
        <React.Fragment>
            <button className={`lg:px-[25.5px] px-[13px] text-[#005EFF] rounded-full bg-transparent cursor-pointer hover:text-[#141BEA] ease-in-out duration-500`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonEmptyBlue };