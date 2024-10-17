import React, { FC } from "react";

const Select = ({listItems, ...proos}: {listItems: Array<string>, props?: object}) => {
    return (
        <select>
            {listItems.map((item) => {
                return(
                    <option value={item}>item</option>
                );
            })}
        </select>
    );
}

export { Select };