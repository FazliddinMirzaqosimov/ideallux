import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import SwiperCore, {Autoplay} from "swiper";
import Partner1 from "/public/partnyor/1.png";
import Partner2 from "/public/partnyor/2.png";
import Partner3 from "/public/partnyor/3.png";
import Partner4 from "/public/partnyor/4.png";
import Partner5 from "/public/partnyor/5.png";
import Partner6 from "/public/partnyor/6.png";
import Partner7 from "/public/partnyor/7.png";
import Partner8 from "/public/partnyor/8.png";
import Partner9 from "/public/partnyor/9.png";
import Partner10 from "/public/partnyor/10.png";
import Partner11 from "/public/partnyor/11.png";
import Partner12 from "/public/partnyor/12.png";
import Partner13 from "/public/partnyor/13.png";
SwiperCore.use([Autoplay]);


const partners = [
    {
        image: Partner1,
        id: 1
    },
    {
        image: Partner2,
        id: 2
    },
    {
        image: Partner3,
        id: 3

    },
    {
        image: Partner4,
        id: 4
    },
    {
        image: Partner5,
        id: 5
    },
    {
        image: Partner6,
        id: 6

    },
    {
        image: Partner7,
        id: 7
    },
    {
        image: Partner8,
        id: 8
    },
    {
        image: Partner9,
        id: 9

    },
    {
        image: Partner10,
        id: 10

    },
    {
        image: Partner11,
        id: 11

    },
    {
        image: Partner12,
        id: 12

    },
    {
        image: Partner13,
        id: 13

    }
]

const Partners = () => {
    return (
        <Swiper
            id={'mySwiper1'}
            autoplay={{
                delay:2000
            }}
            loop={true}
            breakpoints={{
                1560: {
                    slidesPerView: 6, spaceBetween: 40
                },
                1280: {
                    slidesPerView: 6, spaceBetween: 40
                },
                1024: {
                    slidesPerView: 5, spaceBetween: 40
                },
                640: {
                    slidesPerView: 3, spaceBetween: 40
                },
                450: {
                    slidesPerView: 2, spaceBetween: 40
                },
                0: {
                    slidesPerView: 1.5, spaceBetween: 40
                }
            }}
            className="  mySwiper w-full h-[70px] z-20">
            {
                partners.map(partner => (
                    <SwiperSlide key={partner.id} className={'relative w-full  h-[70px]'}>
                        <Image src={partner.image} alt={'banner'} layout='fill'/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default Partners;