import {CategoryCard, ProductCard} from "@/components";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useRouter} from "next/router";
import Skeleton from "react-loading-skeleton";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";

const Catalog = ({setIsShow, isState}) => {
    const {data,isLoading} = useQuery('get-category', () => apiService.getData('/categories'))
    const router = useRouter()

    const {lang}=useSelector(state => state.lang)
    const [language,setLanguage]=useState('')
    useEffect(()=>{
        setLanguage(lang)
    },[lang])
    const categoryClick = (id) => {
        router.push(`/category/${id}`)
        console.log('render')
        if (isState) {
            setIsShow(false)
        }
    }
    return (
        <>
            <div className={'sm:hidden block'}>
                <Swiper
                    id={'mySwiper1'}
                    autoplay={{
                        delay: 5000
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.3, spaceBetween: 12
                        }
                    }}
                    className="  mySwiper-product w-full  ">

                    {
                        isLoading ? Array(6).fill('').map((_,ind)=> <Skeleton  height={400} key={ind}/>)
                            :
                            data?.data?.categories.map(category => (
                                    <SwiperSlide  key={category?._id} onClick={() => categoryClick(category._id)} >
                                        <div onClick={() => categoryClick(category._id)} className={``}>
                                            <CategoryCard isCard={true} image={category?.image} id={category?._id} text={language==='ru' ? category?.nameRu : category?.nameUz}
                                                         />
                                        </div>
                                    </SwiperSlide>


                            ))
                    }


                </Swiper>
            </div>

        <div className={'hidden sm:grid  xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2    gap-2'}>
            {
                isLoading ? Array(6).fill('').map((_,ind)=> <Skeleton  height={400} key={ind}/>)
                    :
                data?.data?.categories.map(category => (
                    <div key={category?._id} onClick={() => categoryClick(category._id)} className={``}>
                        <CategoryCard isCard={true} image={category?.image} id={category?._id} text={language==='ru' ? category?.nameRu : category?.nameUz}/>
                    </div>

                ))
            }

        </div>
        </>
    );
};

export default Catalog;