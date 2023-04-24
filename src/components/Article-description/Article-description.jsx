import React from 'react';
import Image from "next/image";
import ArticleImage from "../../../public/articel-card.png";

const ArticleDescription = ({image,description}) => {
    return (
        <div className={'flex lg:flex-row flex-col items-start sm:gap-10 gap-6'}>
            <div className={'lg:w-1/2'} dangerouslySetInnerHTML={{__html: description}}>
            </div>
            <div
                    className={'relative 2xl:w-[700px] sm:h-[350px] xs:h-60 h-40     xl:w-[500px] lg:w-[350px] w-full lg:order-2 order-1  flex-shrink-0'}>
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/img/${image?.name}`} alt={'description image'} layout={'fill'}/>
            </div>
        </div>
    );
};

export default ArticleDescription;