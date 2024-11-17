import { URL } from "./AdressBackend";
import { ICertificate } from "./Schemas";

const uploadCertificate = async (certificate: ICertificate) => {
    const adressURL: string = URL + `/certificates/upload`;
    try {
        let body: ICertificate = certificate;

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

const revokeCertificate = async (idCertificate: string | number, reason: string) => {
    const adressURL: string = URL + `/certificates/${idCertificate}/revoke`;
    try {
        let body = {
            reason,
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
        return false;
    }

}

const transferCertificate = async (to_user_id: string | number, idCertificate: string | number) => {
    const adressURL: string = URL + `/certificates/${idCertificate}/transfer`;
    
    try {
        let body = {
            to_user_id: to_user_id
        }

        let response = await fetch(adressURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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

const completeCourse = async (user_id: string | number, course_id: string | number) => {
    const adressURL: string = URL + `/course/complete`;
    try {
        let body = {
            user_id,
            course_id,
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

const getCertificate = async (user_id: string | number, course_id: string | number) => {
    const adressURL: string = URL + `/course/${course_id}/certificate`;
    try {
        let body = {
            user_id,
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

const convertToNFT = async (idCertificate: string | number) => {
    const adressURL: string = URL + `/certificates/${idCertificate}/convert-to-nft`;
    try {
        let response = await fetch(adressURL, {
            method: "POST",
            body: '',
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

export { uploadCertificate, revokeCertificate, transferCertificate, completeCourse, getCertificate, convertToNFT};
