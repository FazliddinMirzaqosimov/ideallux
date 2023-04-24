import Image from "next/image";
import React from "react";
import Link from "next/link";
import {FaLongArrowAltRight} from "react-icons/fa";
import { TbClockHour6 } from "react-icons/tb";
import moment from "moment";

const ArticleCard = ({image, title,id,created}) => {

    return (
        <div className={'product-card bg-white  rounded-xl shadow-xl flex flex-col justify-between space-y-3'}>
                <div className={'w-full h-48 sm:h-[360px] relative'}>
                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}/img/${image.name}`} alt={'product-image'} layout='fill'/>
                </div>


            <div className={'sm:p-6 p-3'}>
                <p className={' lg:text-2xl text-lg font-bold font-roboto'}>{title}</p>
            <div className={'flex items-center justify-between '}>
                <Link href={`/article/${id}`} className={'font-normal  text-primary  text-base flex items-center space-x-3 font-roboto'}>
                    Подробнее
                    <FaLongArrowAltRight fontSize={20}/>
                </Link>
                <div className={'flex items-center space-x-2 text-secondary'}>
                    <TbClockHour6/>
            <p className={'font-roboto'}>
                {moment(created).fromNow()}
            </p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default ArticleCard;