import { IUser } from "./Schemas";

const registerUser = async (user: IUser) => {
    const adressURL: string = URL + `/user/register`;
    try {
        let body: IUser = user;

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

const authentificationUser = async (email: string, password: string) => {
    const adressURL: string = URL + `/user/register`;
    try {
        let body: {email: string, password: string} = {
            email,
            password,
        };

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

const linkWallet = async (user_id: string, wallet_address: string) => {
    const adressURL: string = URL + `/user/link-wallet`;
    try {
        let body: {user_id: string, wallet_address: string} = {
            user_id,
            wallet_address,
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

const resetPassword = async (user_id: string, wallet_address: string) => {
    const adressURL: string = URL + `/user/reset-password`;
    try {
        let body: {email: string} = {
            email: "string"
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



export { registerUser, authentificationUser, linkWallet, resetPassword };