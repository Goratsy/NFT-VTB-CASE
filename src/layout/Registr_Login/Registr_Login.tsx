import React, { FC } from "react";
import { ButtonField } from "../../components/Buttons/ButtonField";

const RegistrLogin: React.FC = () => {
    return (
        <section>
            <h1>The greatest NFT crediting service</h1>
            <div>
                <ButtonField bgColor={''}>Войти как сотрудник</ButtonField>
                <ButtonField bgColor={''}>Войти как компания</ButtonField>
                <button>Зарегистрироваться</button>
            </div>
        </section>
    );
}

export { RegistrLogin };