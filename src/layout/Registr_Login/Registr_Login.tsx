import React, { FC } from "react";
import { ButtonFieldBlue } from "../../components/Buttons/ButtonFieldBlue";
import { ButtonFieldBlack } from "../../components/Buttons/ButtonFieldBlack";
import { ButtonEmptyBlue } from "../../components/Buttons/ButtonEmptyBlue";


const RegistrLogin: React.FC = () => {
    return (
        <section className="relative flex justify-center items-center flex-col pb-[60px] pt-[120px] bg-white mx-16 my-40 rounded-[50px]" >
            <h1 className="absolute lg:-top-28 md:-top-20 -top-12 z-50 lg:leading-[108px] leading-[auto] text-center lg:text-[85px] md:text-[55px] text-[30px] whitespace-nowrap">The greatest <span className="gradient-text-blue">NFT <br/>crediting service</span></h1>
            <img src="../../assets/image.png" className="lg:w-[400px] w-[40vw]"></img>
            <div className="flex justify-center items-center flex-col gap-3 mt-5">
                <ButtonFieldBlue>Войти как сотрудник</ButtonFieldBlue>
                <ButtonFieldBlack>Войти как компания</ButtonFieldBlack>
                <ButtonEmptyBlue>Зарегистрироваться</ButtonEmptyBlue>
            </div>
        </section>
    );
}

export { RegistrLogin };