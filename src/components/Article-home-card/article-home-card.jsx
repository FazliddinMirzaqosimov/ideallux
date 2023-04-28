import React from 'react';
import Link from "next/link";
import {FaLongArrowAltRight} from "react-icons/fa";
import Image from "next/image";
import {useTranslation} from "react-i18next";

const ArticleHomeCard = ({title, text, id, image}) => {
    const {t} =useTranslation()
    return (
        <div className={'flex sm:px-3 sm:flex-row flex-col items-center  justify-between sm:h-[480px]  sm:gap-10'}>
            <div
                className={'flex sm:w-1/2 w-full flex-col items-start justify-center  sm:order-1 order-2 sm:bg-transparent bg-primary  sm:p-0 p-3 sm:h-full '}>
                <h1 className={'font-bold xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mb-1 sm:text-black text-white font-roboto break-all'}>{title}</h1>
                <div className={' break-all'}>
                        <div className={'four-line-dots sm:text-black text-white sm:opacity-100 opacity-60'} dangerouslySetInnerHTML={{__html:text}}>

                        </div>
                </div>
                <Link href={`/product/${id}`}
                      className={'font-normal sm:text-primary text-white text-base flex items-center space-x-3 font-roboto'}>
                    {t('more')}
                    <FaLongArrowAltRight fontSize={20}/>
                </Link>
            </div>
            <div className={'relative sm:w-1/2    xs:w-[350px] w-48  sm:h-full xs:h-[350px] h-48 overflow-hidden sm:order-2 order-1  '}>
                <div className={'sm:block hidden absolute top-1/3 left-0  w-[455px] h-[455px] rounded-full bg-primary z-20'}></div>
                <div className={'sm:absolute sm:bottom-0 w-full h-full  z-40'}>
                    <Image src={image?.location} alt={'image'} layout={'fill'} className={'object-contain'}/>
                </div>
            </div>
        </div>
    );
};

export default ArticleHomeCard;