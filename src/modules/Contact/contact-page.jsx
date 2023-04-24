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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.2257247570624!2d67.12979457672517!3d39.41901987161732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cc56ed9ce63ed%3A0xac98c61429751519!2sIdeal%20Elektro%20lux!5e0!3m2!1sru!2s!4v1682334752439!5m2!1sru!2s"
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