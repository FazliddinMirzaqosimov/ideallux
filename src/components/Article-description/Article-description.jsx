import React from 'react';
import Image from "next/image";

const ArticleDescription = ({image,description}) => {
    return (
        <div className={'flex lg:flex-row flex-col items-start sm:gap-10 gap-6'}>
            <div className={'lg:w-1/2'} dangerouslySetInnerHTML={{__html: description}}>
            </div>
            <div
                    className={'relative   2xl:aspect-[4/3] lg:aspect-square aspect-[4/3] lg:w-1/2 w-full lg:order-2 order-1  flex-shrink-0'}>
                <Image src={image?.location} alt={'description image'} layout={'fill'}/>
            </div>
        </div>
    );
};

export default ArticleDescription;