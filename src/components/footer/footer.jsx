import React from 'react';
import Image from "next/image";
import Logo from '../../../public/Logo.png'
import Link from "next/link";
import {SocialMedia} from "@/components";
import {sidebarNavItems} from "@/config/routeConfigs";
import FooterImage from '../../../public/footer-image.png'
import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t}=useTranslation()
    return (
        <div className={'bg-white md:mb-0 mb-20'}>
            <div className={'relative container mx-auto py-12 grid 2xl:grid-cols-6 sm:grid-cols-2  3xl:gap-16 gap-10  items-center'}>

                <div className={'2xl:col-span-2 flex flex-col space-y-6'}>
                    <Link href={'/'}>
                        <Image src={Logo} alt={'logo'} width={174} height={64}/>
                    </Link>
                    <p className={'font-normal text-sm text-secondary font-roboto'}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                    <SocialMedia isContact={false}/>
                </div>
                {
                    sidebarNavItems.map(nav=>(
                <div key={nav.title} className={'flex flex-col items-start space-y-4'}>
                    <h6 className={'font-bold relative  pb-1 text-2xl text-black sm:after:w-24 sm:after:h-0.5 sm:after:bg-primary sm:after:absolute sm:after:left-0 sm:after:bottom-0 font-roboto'}>{t(nav.title)}</h6>
                    <Link href={nav.route} className={'text-secondary text-lg font-normal font-roboto'}>{t(nav.lable)}</Link>
                </div>

                    ))
                }
                <Image src={FooterImage} alt={'footer image'} className={'absolute lg:block hidden bottom-0 right-0'}/>
            </div>
        </div>
    );
};

export default Footer;