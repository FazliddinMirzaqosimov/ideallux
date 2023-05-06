import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Logo from '../../../public/Logo.png'
import Link from "next/link";
import {Button, SocialMedia} from "@/components";
import {sidebarNavItems} from "@/config/routeConfigs";
import FooterImage from '../../../public/footer-image.png'
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";


const Footer = () => {
    const {t}=useTranslation()
    const {lang}=useSelector(state => state.lang)
    const [language,setLanguage]=useState('')
    useEffect(()=>{
        setLanguage(lang)
    },[lang])

    return (
        <div className={'bg-white md:mb-0 mb-20'}>
            <div className={'relative container mx-auto py-12 grid 2xl:grid-cols-6 sm:grid-cols-2  3xl:gap-16 gap-10  items-center overflow-hidden'}>

                <div className={'2xl:col-span-2 flex flex-col space-y-6'}>
                    <Link href={'/'}>
                        <Image src={Logo} alt={'logo'} width={174} height={64}/>
                    </Link>
                    <p className={'font-normal text-sm text-secondary font-GothamPro'}>
                        {t('aboutCompany')}
                    </p>
                    <SocialMedia isContact={false}/>
                    <a href={`${language==='ru' ? 'IDEAL каталог 2023 рус.pdf' : 'IDEAL katalog 2023 uzb.pdf'}`} download={`${language==='ru' ? 'IDEAL каталог 2023 рус.pdf' : 'IDEAL katalog 2023 uzb.pdf'}`}>
                        <Button text={'download'} bg={'primary'} color={'white'}/>
                    </a>
                </div>
                {
                    sidebarNavItems.map(nav=>(
                <div key={nav.title} className={'flex flex-col items-start space-y-4'}>
                    <h6 className={'font-bold relative  pb-1 text-2xl text-black sm:after:w-24 sm:after:h-0.5 sm:after:bg-primary sm:after:absolute sm:after:left-0 sm:after:bottom-0 font-GothamPro'}>{t(nav.title)}</h6>
                    <Link href={nav.route} className={'text-secondary text-lg font-normal font-GothamPro'}>{t(nav.lable)}</Link>
                </div>

                    ))
                }
                <Image src={FooterImage} alt={'footer image'} className={'absolute lg:block hidden -bottom-20 right-0  w-[287px] aspect-[3/4] '} />
            </div>
        </div>
    );
};

export default Footer;