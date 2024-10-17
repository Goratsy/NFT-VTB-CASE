import React, { FC } from "react";
import { Input } from "../../components/Inputs/Input";
import { ButtonFieldBlue } from "../../components/Buttons/ButtonFieldBlue";


const FormRegistr = () => {
    return (
        <form>
            <Input placeholder="Логин"/>
            <Input placeholder="Пароль"/>
            <Input placeholder="Повторите пароль"/>
            <ButtonFieldBlue>Регистрация</ButtonFieldBlue>
        </form>
    );
}

export { FormRegistr };