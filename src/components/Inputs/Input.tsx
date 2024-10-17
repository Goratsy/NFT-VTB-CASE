import React, { FC } from "react";

const Input = ({placeholder, ...proos}: {placeholder: string, props?: object}) => {
    return (
        <input placeholder={placeholder} {...proos}/>
    );
}

export { Input };