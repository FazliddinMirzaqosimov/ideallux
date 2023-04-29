import Link from "next/link";
import {navItems} from "@/config/routeConfigs";
import {RiCloseLine, RiInstagramLine, RiMenuLine, RiPhoneLine, RiSearchLine} from "react-icons/ri"
import {Button, Catalog, Language, SearchInput, TitleSection} from "@/components";
import Image from "next/image";
import Logo from '../../../public/Logo.png'
import {useState } from "react";
import {useTranslation} from 'react-i18next'

const DesktopNavbar = () => {
    const {t}=useTranslation()
    const [isShow,setIsShow]=useState(false)
    const catalogShow=()=>{
        setIsShow(!isShow)
    }

    return (
        <div className={'fixed top-0 left-0 w-full z-[999]'}>
            {/*navbar top*/}
            <div className={'bg-primary h-9  w-full flex items-center'}>
                <div className={'container mx-auto flex items-center justify-between'}>
                    <ul className={'flex items-center space-x-6'}>
                        {
                            navItems.map(item => (
                                <li key={item.lable}>
                                    <Link href={item.route} className={'text-sm text-white font-normal font-GothamPro'}>
                                        {t(item.lable)}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                    <div className={'flex items-center space-x-6'}>
                        <a target="_blank" href={'https://www.instagram.com/ideallux_uz/'}
                           className={'flex items-center space-x-1'}>
                            <RiInstagramLine className={'text-white'}/>
                            <p className={'text-xs text-white font-GothamPro'}>Instagram</p>
                        </a>
                        <a href={'tel:+99897 223 00 01'} className={'flex items-center space-x-1'}>
                            <RiPhoneLine className={'text-white'}/>
                            <p className={'text-xs text-white font-GothamPro'}>+99897 223 00 01</p>
                        </a>
                        <Language color={'white'}/>
                    </div>
                </div>
            </div>
            {/*navbar bottom*/}
            <div className={'bg-white'}>
                <div className={'container mx-auto py-3  flex items-center justify-between lg:space-x-0 space-x-4'}>
                    <Link href={'/'}>
                        <Image src={Logo} alt={'logo'} width={174} height={64}/>
                    </Link>
                    <div className={'flex items-center w-9/12 lg:space-x-8 space-x-4 '}>
                        <div>
                            <Button text={'catalogProduct'} icon={isShow ? <RiCloseLine className={'text-xl'}/> : <RiMenuLine/>} color={'white'} bg={'primary'} handleClick={catalogShow}/>
                        </div>
                        <SearchInput/>
                    </div>
                    <div></div>
                </div>

            </div>
        {/* catalog*/}
            {
                isShow &&
            <div className={' bg-white  w-full  h-[90vh]  lg:pt-16 pt-12  fixed top-[120px] overflow-y-scroll'}>
                <div className={' container mx-auto  '}>
                    <TitleSection text={'Категории'}/>
                    <Catalog setIsShow={setIsShow} isState={true}/>
                </div>
                    <div className={' w-full h-[140px] bg-primary  xl:mt-36 mt-28'}></div>

            </div>
            }
        </div>
    );
};

export default DesktopNavbar;