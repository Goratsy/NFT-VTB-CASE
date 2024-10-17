import React, { FC } from "react";
import { Input } from "../../components/Inputs/Input";
import { ButtonField } from "../../components/Buttons/ButtonField";

const FormRegistr = () => {
    return (
        <form>
            <Input placeholder="Логин"/>
            <Input placeholder="Пароль"/>
            <Input placeholder="Повторите пароль"/>
            <ButtonField bgColor="">Регистрация</ButtonField>
        </form>
    );
}

export { FormRegistr };