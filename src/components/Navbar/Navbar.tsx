import React from "react";
import { InputWithIcon } from "../Inputs/InputWithIcon";
import { ButtonField } from "../Buttons/ButtonField";

const Navbar = () => {
    return (
        <nav>
            <img src="../../assets/logo_0_1.png"/>
            <InputWithIcon placeholder="Поиск"></InputWithIcon>
            <div>
                <span>Сотрудники</span>
                <span>Кошелек</span>
                <span>Профиль</span>
            </div>
            <ButtonField bgColor="black">
                <img src="../../assets/ellipse.png"/>
                <span>EQAo48...WrnNL</span>
            </ButtonField>
        </nav>
    );
}

export { Navbar }