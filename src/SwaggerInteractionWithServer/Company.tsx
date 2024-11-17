import { URL } from "./AdressBackend";
import { IUser } from "./Schemas";

const registrCompany = async (nameCompany: string, adressCompany: string) => {
    const adressURL: string = URL + `/company/register`;
    try {
        let companyCard = {
            id: "company-" + String(Math.random) + String(Date.now()),
            name: nameCompany,
            address: adressCompany,
            employees: []
        }

        let response = await fetch(adressURL, {
            method: "POST",
            body: JSON.stringify(companyCard),
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }

}

const fireEmployee = async (idCompany: number | string, idEmployee: number | string) => {
    const adressURL: string = URL + `/company/${idCompany}/fire-employee`;
    try {
        let body = { employee_id: idEmployee }

        let response = await fetch(adressURL, {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }

}

const transferEmployee = async (idCompany: number | string, idEmployee: number | string, new_position: string) => {
    const adressURL: string = URL + `/company/${idCompany}/transfer-employee`;
    try {
        let body = {
            employee_id: idEmployee,
            new_position,
        }

        let response = await fetch(adressURL, {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }
}

const hireEmployee = async (idCompany: number | string, user: IUser) => {
    const adressURL: string = URL + `/company/${idCompany}/hire-employee`;
    try {
        let body = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            profile: {
                bio: user.profile.bio,
                skills: user.profile.skills
            }
        }

        let response = await fetch(adressURL, {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }
}

const verifyWorkExperience = async (idCompany: number | string, idEmployee: number | string) => {
    const adressURL: string = URL + `/company/${idCompany}/verify-work-experience?employee_id=${idEmployee}`;

    try {
        let response = await fetch(adressURL);
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }
}

const searchUsers = async (name: number | string) => {
    const adressURL: string = URL + `/company/search-users?query=${name}`;

    try {
        let response = await fetch(adressURL);
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }
}

const checkWorkExperience = async (idCompany: number | string, idEmployee: number | string) => {
    const adress: string = URL + `/company/${idCompany}/verify-work-experience?employee_id=${idEmployee}`;
    try {
        let response = await fetch(adress);
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        alert(`Произошла ошибка: ${error}`);
    }

}


export { registrCompany, transferEmployee, fireEmployee, hireEmployee, verifyWorkExperience, searchUsers, checkWorkExperience };