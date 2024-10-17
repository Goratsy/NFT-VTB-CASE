import React, { FC } from "react";

const InputWithIcon = ({placeholder, ...proos}: {placeholder: string, props?: object}) => {
    return (
        <input placeholder={placeholder} {...proos}/>
    );
}

export { InputWithIcon };