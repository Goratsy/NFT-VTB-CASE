import React from "react";

const ButtonEmptyBlue = ({children, ...props}: {children: React.ReactNode, props?: object}) => {
    return (
        <React.Fragment>
            <button className={`flex justify-center items-center gap-4 flex-row lg:px-[25.5px] px-[13px] text-[#005EFF] rounded-full bg-transparent cursor-pointer hover:text-[#141BEA] ease-in-out duration-500`}>{children}</button>
        </React.Fragment>
    );
}

export { ButtonEmptyBlue };