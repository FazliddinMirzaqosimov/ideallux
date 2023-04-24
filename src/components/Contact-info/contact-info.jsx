import React from 'react';
import {useTranslation} from "react-i18next";

const ContactInfo = ({icon, text, title}) => {
    const {t}=useTranslation()

    return (
        <div className={'flex sm:flex-row flex-col items-start space-x-1'}>
            <div className={'flex  items-center space-x-3'}>
                <div className={'text-xl text-primary'}>{icon}</div>
                <h6 className={'font-bold text-black text-lg flex-shrink-0 font-roboto'}>{t(title)}:</h6>
            </div>
            <p className={'font-normal text-black text-lg font-roboto'}>{t(text)}</p>
        </div>
    );
};

export default ContactInfo;