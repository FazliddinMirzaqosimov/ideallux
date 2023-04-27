import React from 'react';
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

const ProductImageSlider = ({images}) => {
    return (
        <div className={'product-card'}>

            <Swiper
                id={'mySwiper2'}
                loop={'true'}
                pagination={true}
                modules={[Pagination]}
                className="  mySwiper2 w-full aspect-[4/4] z-20">
                {
                    images?.map(image => (
                        <SwiperSlide key={image?._id} className={'relative w-full h-full'}>
                            <Image src={image?.location} alt={'product-image'}
                                   layout='fill'/>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
};

export default ProductImageSlider;