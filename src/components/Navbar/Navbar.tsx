import React from "react";
import { InputWithIcon } from "./InputWithIcon";
import { ButtonFieldBlack } from "../Buttons/ButtonFieldBlack";
import { ButtonFieldBlackNavbar } from "./ButtonFieldBlackNavbar";
import '../../index.css';

const logoUser = require('../../assets/ellipse.png'); // Rewtite 
const logoCite = require('../../assets/logo_0_1.png'); // Rewtite 


const Navbar = () => {
    return (
        <nav className="relative flex justify-between items-center flex-row gap-4 bg-white m-[30px] py-5 px-[26px] rounded-full overflow-y-auto z-50 navbarShadow">
            <img src={logoCite}/>
            <div className="max-w-[290px]">
                <InputWithIcon placeholder="Поиск"></InputWithIcon>
            </div>
            <div className="flex justify-between g-20 min-w-64 max-w-96 w-2/5">
                <span className="cursor-pointer gradient-text-blue">Сотрудники</span> {/* Rewtite (import library <Link>) */}
                <span className="cursor-pointer">Кошелек</span> {/* Rewtite */}
                <span className="cursor-pointer">Профиль</span> {/* Rewtite */}
            </div>
            <ButtonFieldBlackNavbar>
                <img src={logoUser}/> {/* Rewtite */}
                <span>EQAo48...WrnNL</span> {/* Rewtite */}
            </ButtonFieldBlackNavbar>
        </nav>
    );
}

export { Navbar }