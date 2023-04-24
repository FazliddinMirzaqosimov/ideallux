import React, {useState} from 'react';
import {bottomSidebar, sidebarNavItems, } from "@/config/routeConfigs";
import Link from "next/link";
import {RiCloseCircleLine, RiInstagramLine, RiMenuLine, RiPhoneLine, RiSearchLine} from "react-icons/ri";
import {Button, Language, SearchInput, SocialMedia} from "@/components";
import Image from "next/image";
import LogoWhite from "../../../public/Logo-white.png";
import Logo from "../../../public/Logo.png";
import {useTranslation} from "react-i18next";

const MobileNavbar = () => {
    const {t}=useTranslation()
    const [show, setShow] = useState(false)
    const [logoState,setLogo]=useState(Logo)

    const handleShowSidebar = () => {
        setShow(prewState=>!prewState)
        setLogo(!show ? LogoWhite : Logo)
    }
    return (
        <>
            <div className={'fixed top-0 left-0 w-full z-50'}>
                <div
                    className={`${show ? 'bg-primary' : 'bg-white'} duration-500  shadow-lg   w-full flex items-center`}>
                    <div className={'container mx-auto flex items-center justify-between py-4'}>
                        <Link href={'/'}>
                            <Image src={logoState} alt={'logo'} width={100} height={60}/>
                        </Link>
                        <div className={'flex items-center space-x-6'}>
                            <Language color={`${show ? 'white' : 'black'}`}/>
                            <div onClick={handleShowSidebar}>
                                {
                                    show ? <RiCloseCircleLine className={'text-white text-xl'}/> :
                                        <RiMenuLine className={'text-primary text-xl'}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*sidebar*/}

            <div
                className={`bg-white  h-full px-3 py-4 flex flex-col items-start fixed top-16 ${show ? 'left-0' : '-left-full'}  space-y-6 w-full duration-500 z-[999]`}>
                <SearchInput/>
                <ul className={'space-y-3'}>
                    {
                        sidebarNavItems.map(nav => (
                            <li className={'space-y-3 flex flex-col items-start'} key={nav.lable}>
                                <h6 className={'font-normal text-base text-black  '}>{t(nav.title)}</h6>
                                <Link href={nav.route} className={''}>
                                    <div onClick={handleShowSidebar} className={'flex items-center text-secondary space-x-3'}>
                                    {nav.icon}
                                    <p>{t(nav.lable)}</p>
                                    </div>
                                </Link>
                            </li>

                        ))
                    }
                </ul>
                <SocialMedia isContact={false}/>
            </div>
            {/*bottom sidebar*/}
            <div
                className={'fixed bottom-0 left-0 z-50 flex items-center justify-evenly py-4 px-3 bg-white w-full rounded-t-2xl  shadow-bottomSidebarShadow'}>
                {
                    bottomSidebar.map(item => (
                        <Link key={item.label} href={item.route} className={'flex flex-col items-center space-y-1.5'}>
                            {item.icon}
                            <p className={'sm:text-base text-xs'}>{t(item.label)}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

export default MobileNavbar;