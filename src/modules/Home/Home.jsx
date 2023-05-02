import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Pagination, Autoplay} from "swiper";
import Image from "next/image";
import Banner1 from '/public/banner1.JPG'
import Banner2 from '/public/banner2.png'
import Banner3 from '/public/banner3.png'
import Banner4 from '/public/banner4.png'
import {
    ArticleCard,
    ArticleHomeCard,
    Catalog,
    Partners,
    ProductCard,
    SearchInput,
    TitleSection,
    Information
} from "@/components";
import ImageArticle from '/public/footer-image.png'
import apiService from "@/service/api";
import {useQuery} from "react-query";
import Skeleton from "react-loading-skeleton";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
SwiperCore.use([Autoplay]);



const Home = () => {
    const {data: articleData,isLoading:articleLoading} = useQuery('get-article-home', () => apiService.getData('/articles?page=1&limit=3'))
    const {data: productData,isLoading:productLoading} = useQuery('get-product-home', () => apiService.getData('/products?&limit=5&sort=-created'))
    const {data: productDataInfo,isLoading:productInfoLoading} = useQuery('get-product-info', () => apiService.getData('/products?page=1&limit=2'))

    const {lang}=useSelector(state => state.lang)
    const [language,setLanguage]=useState('')
    useEffect(()=>{
        setLanguage(lang)
    },[lang])

    return (
        <div className={'pt-2'}>
            <div className={'container mx-auto md:hidden block my-3'}>
                <SearchInput/>
            </div>
            {/*banner*/}
            <div className={`sm:px-0 banner px-3 rounded-xl sm:mb-0 mb-12`}>
                <Swiper
                    id={'mySwiper1'}
                    autoplay={{
                        delay: 3000
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1, spaceBetween: 0
                        }, 0: {
                            slidesPerView: 1, spaceBetween: 12
                        }
                    }}
                    loop={'true'}
                    pagination={true}
                    modules={[Pagination]}
                    className="  mySwiper w-full aspect-[4/2] ">
                    <SwiperSlide className={'relative w-full h-full'}>
                        <Image src={Banner1} alt={'banner'} layout='fill'/>
                    </SwiperSlide>
                    <SwiperSlide className={'relative w-full h-full'}>
                        <Image src={Banner2} alt={'banner'} layout='fill'/>
                    </SwiperSlide>
                    <SwiperSlide className={'relative w-full h-full'}>
                        <Image src={Banner3} alt={'banner'} layout='fill'/>
                    </SwiperSlide>
                    <SwiperSlide className={'relative w-full h-full'}>
                        <Image src={Banner4} alt={'banner'} layout='fill'/>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/*article*/}
            <div className={'bg-bgCard mb-16'}>
                <div className={'grid xl:grid-cols-2 gap-3  sm:container sm:mx-auto'}>
                    {
                        productInfoLoading ? Array(2).fill('').map((_,ind)=> <Skeleton  height={400} key={ind}/>)
                            :
                        productDataInfo?.data?.products.map(product => (
                            <ArticleHomeCard key={product?._id} image={product?.images[0]} title={language==='ru' ? product.titleRu : product.titleUz}
                                             text={language==='ru' ? product.descriptionRu : product.descriptionUz} id={product?._id}/>

                        ))
                    }
                </div>
            </div>
            {/*    Category*/}
            <div className={'container mx-auto  mb-16 md:block hidden'}>
                <TitleSection text={'category'}/>
               <Catalog isState={false}/>

            </div>
            {/* product*/}
            <div className={'container mx-auto  mb-16'}>
                <TitleSection text={'new'}/>
                <div className={'grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'}>
                    {
                        productLoading ? Array(5).fill('').map((_,ind)=> <Skeleton  height={350} key={ind}/>)
                            :
                        productData?.data?.products.map(product => (
                            <ProductCard key={product?._id} id={product?._id} images={product?.images} title={language==='ru' ? product?.titleRu : product?.titleUz} isNew={true}/>
                        ))
                    }

                </div>
            </div>
            {/* articles*/}
            {/*<div className={'container mx-auto  mb-20'}>*/}
            {/*    <TitleSection text={'usefulArticles'}/>*/}
            {/*    <div className={'grid lg:grid-cols-3  gap-3'}>*/}
            {/*        {*/}
            {/*            articleLoading ? Array(3).fill('').map((_,ind) => <Skeleton   height={500} key={ind}/>)*/}
            {/*                :*/}
            {/*            articleData?.data?.articles.map(article=>(*/}
            {/*        <ArticleCard created={article?.created} key={article._id} image={article?.mainImage} title={language==='ru' ? article?.titleRu :  article?.titleUz} id={article?._id} />*/}

            {/*            ))*/}
            {/*        }*/}


            {/*    </div>*/}
            {/*</div>*/}
            {/*Partners*/}
            {/*<div className={'mb-16'}>*/}
            {/*    <Partners />*/}
            {/*</div>*/}
            {/* information*/}
            <Information/>
        </div>
    )
};

export default Home;