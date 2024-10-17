import React, { FC } from "react";
import { Input } from "../../components/Inputs/Input";
import { ButtonFieldBlueRegistr } from "./ButtonFieldBlueRegistr";


const FormRegistr = () => {
    return (
        <form className="flex justify-center items-center gap-[14px] flex-col min-w-14 z-50 w-full px-5 md:mb-[240px] mb-[120px]">
            <Input placeholder="Логин"/>
            <Input placeholder="Пароль"/>
            <Input placeholder="Повторите пароль"/>
            <ButtonFieldBlueRegistr>Регистрация</ButtonFieldBlueRegistr>
        </form>
    );
}

export { FormRegistr };