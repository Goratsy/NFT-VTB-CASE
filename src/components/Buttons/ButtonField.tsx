import React, { FC } from "react";

const ButtonField = ({bgColor = 'white', children, ...props}: {bgColor: string, children: any, props?: object}) => {
    console.log(typeof bgColor, typeof children);
    return (
        <React.Fragment>
            <button className="">{children}</button>
        </React.Fragment>
    );
}

export { ButtonField };