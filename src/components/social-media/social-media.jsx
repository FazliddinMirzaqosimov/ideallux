import React from 'react';
import {socialMedia} from "@/config/routeConfigs";
import {ContactInfo} from "@/components";
import {contactItems} from "@/config/contactConfig";
import {useTranslation} from "react-i18next";






const SocialMedia = ({isContact}) => {
    const {t}=useTranslation()
    return (
        <div className={'flex flex-col items-start'}>
            <p className={`text-black ${isContact ? 'sm:text-2xl text-lg font-bold mb-6' : 'text-base font-normal mb-1'}  font-GothamPro`}>{t('contact.alwaysInTouch')}</p>
            {
                isContact ?
                    <div className={'flex flex-col items-start space-y-7 mb-6'}>
                        {
                            contactItems.map(contact=>(
                                <ContactInfo icon={contact.icon} title={contact.title} text={contact.text} key={contact.id}/>
                            ))
                        }

                    </div>
                    :
                    <a href={`tel:+99897 223 00 01`} className={'font-bold text-primary text-2xl mb-3 font-GothamPro'}>+99897 223 00
                        01</a>
            }
            <div className={'flex items-center space-x-9'}>
                {
                    socialMedia.map((social, index) => (
                        <div key={index} className={'bg-primary p-1.5 rounded-full'}>
                            <a target={"_blank"} href={social.url} className={'text-white text-xl'}>
                                {social.icon}

                            </a>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default SocialMedia;