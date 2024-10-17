import React from "react";
import { InputWithIcon } from "../Inputs/InputWithIcon";
import { ButtonFieldBlack } from "../Buttons/ButtonFieldBlack";

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
            <ButtonFieldBlack>
                <img src="../../assets/ellipse.png"/>
                <span>EQAo48...WrnNL</span>
            </ButtonFieldBlack>
        </nav>
    );
}

export { Navbar }