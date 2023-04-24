import React from 'react';
import {SocialMedia, TitleSection} from "@/components";

const ContactPage = () => {
    return (
        <div className={'bg-bgColor min-h-[90vh] sm:py-16 py-12 sm:space-y-16 space-y-12'}>
            <div className="container mx-auto">
            <TitleSection text={'Контакты'}/>
            <div className={'sm:bg-white xl:p-12 sm:p-6 rounded-xl grid lg:grid-cols-2 items-center 2xl:gap-48 xl:gap-32 lg:gap-20 gap-16 '}>
                <iframe
                    className={'w-full sm:aspect-[4/3] aspect-[1/1] lg:order-1 order-2'}
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d197242.6642827086!2d66.99461814117072!3d39.42600967424554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUzbekistan%2C%20Samarkand%20Region%2C%20Urgut%20district%20%20FREE%20ECONOMIC%20ZONE%20URGUT!5e0!3m2!1sru!2s!4v1680699923885!5m2!1sru!2s"
                      allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={'lg:order-2 order-1'}>
                <SocialMedia isContact={true}/>
                </div>
            </div>

            </div>
        </div>
    );
};

export default ContactPage;