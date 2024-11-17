import React from "react";
import { Select } from "../../components/Selects/Select";
import { ButtonFieldBlue } from "../../components/Buttons/ButtonFieldBlue";
import { revokeCertificate, transferCertificate } from "../../SwaggerInteractionWithServer/Certificates";

const FiltersEmployees = () => {
    let issueCertificate = async () => {
        let idEmployee = prompt('Кому выдать сертификат? Впишите ID сотрудника:');
        let idCertificate = prompt('Какой сертификат выдать? Впишите ID сертификата:');
        

        if (idEmployee && idCertificate) {
            let responseFromServer = await transferCertificate(idEmployee, idCertificate);

            if (responseFromServer) {
                alert('Данные передача прошла успешно!');
            } else {
                alert('Данные передача прошла не успешно. Повторите ввод.');
            }
        } else {
            alert('Данные не введены. Повторите ввод.');
        }
        
    }

    let revokeCertificateBut = async () => {
        let idEmployee = prompt('Кому надо отозвать сертификат? Впишите ID сотрудника:');
        let reason = prompt('Напишите причину отзыва сертификата. Впишите причину:');
        

        if (idEmployee && reason) {
            let responseFromServer = await revokeCertificate(idEmployee, reason);

            if (responseFromServer) {
                alert('Сертификат отозван успешно!');
            } else {
                alert('Сертификат отозван не успешно. Повторите ввод.');
            }
        } else {
            alert('Данные не введены. Повторите ввод.');
        }
        
    }

    // let createCertificate = async () => {
    //     let idEmployee = prompt('Кому выдать сертификат? Впишите ID сотрудника:');
    //     let idCertificate = prompt('Какой сертификат выдать? Впишите ID сертификата:');
        

    //     if (idEmployee && idCertificate) {
    //         let responseFromServer = await transferCertificate(idEmployee, idCertificate);

    //         if (responseFromServer) {
    //             alert('Данные передача прошла успешно!');
    //         } else {
    //             alert('Данные передача прошла не успешно. Повторите ввод.');
    //         }
    //     } else {
    //         alert('Данные не введены. Повторите ввод.');
    //     }
        
    // }



    return (
        <div className="pt-5 px-5 pb-3 flex gap-5 justify-between overflow-y-auto">
            <div className="flex gap-5">
                <Select listItems={['ФИО', 'Должность', 'Дата найма', 'Стек']}></Select>
                <Select listItems={['От А до Я', 'От Я до А']}></Select>
            </div>
            <div className="flex gap-5">
                <ButtonFieldBlue func={issueCertificate}>Выдать сертификат</ButtonFieldBlue>
                <ButtonFieldBlue func={revokeCertificateBut}>Отозвать сертификат</ButtonFieldBlue>
                {/* <ButtonFieldBlue func={createCertificate}>Создать сертификат</ButtonFieldBlue> */}
                {/* <ButtonFieldBlue func={createCertificate}>Создать сертификат</ButtonFieldBlue> */}

            </div>
        </div>
    );
}

export { FiltersEmployees }