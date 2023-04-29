import Image from "next/image";

import {ProductCard, ProductImageSlider, TitleSection} from "@/components";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useTranslation} from "react-i18next";
import Skeleton from "react-loading-skeleton";
import {useSelector} from "react-redux";

const ProductDetailed = () => {
    const router = useRouter()
    const {productId} = router.query
    const {
        data: productById,
        isLoading: byIdLoading, isSuccess
    } = useQuery(['get-product', productId], () => apiService.getDataByID('/products', productId))
    const {
        data: productData,
        isLoading: productLoading,
        refetch
    } = useQuery('get-product-rec', ({url}) => apiService.getData(`/products?page=1&limit=5&category=${productById?.data?.product?.category._id}`), {
        enabled: false
    })

    console.log(productById?.data?.product?.category)

    const {t} = useTranslation()

    const [mainImage, setMainImage] = useState('')
    const [showDesc, setShowDesc] = useState(false)
    const {lang} = useSelector(state => state.lang)
    const [language, setLanguage] = useState('')
    useEffect(() => {
        setLanguage(lang)
    }, [lang])
    console.log(mainImage)
    const checkkImage = (image) => {
        setMainImage(image?.location)
    }

    useEffect(() => {
        setMainImage(productById?.data?.product?.images[0].location)
        console.log(productById?.data?.product)
        if (isSuccess) {
            refetch()
        }
    }, [productById])


    const showDescription = () => {
        setShowDesc(!showDesc)
    }

    return (
        <div className={'bg-bgColor min-h-[90vh] sm:py-16 py-12 sm:space-y-16 space-y-12 overflow-hidden'}>

            <div className={'sm:bg-white container mx-auto sm:rounded-xl sm:p-12 sm:space-y-12 space-y-6'}>
                {
                    byIdLoading ? <Skeleton height={800}/> :
                        <>
                            <h5 className={'font-bold xl:text-4xl lg:text-2xl sm:text-xl text-lg  text-black'}>{language === 'ru' ? productById?.data?.product?.titleRu : productById?.data?.product?.titleUz}</h5>
                            <div
                                className={'flex lg:flex-row flex-col items-start xl:space-x-40 lg:space-x-20 space-y-10'}>

                                <div className={'sm:flex items-start lg:w-1/2 w-full hidden space-x-10'}>
                                    <div className={'flex flex-col items-center space-y-8'}>
                                        {
                                            productById?.data?.product?.images.map(image => (
                                                <div onClick={() => checkkImage(image)} key={image?._id}
                                                     className={' xl:w-32 w-24 aspect-[4/5] flex items-center justify-center border relative rounded-xl'}>
                                                    <Image src={image?.location}
                                                           alt={'detailed product image'} layout={'fill'} className={'object-contain'}/>
                                                </div>

                                            ))
                                        }

                                    </div>
                                    <div className={'relative  lg:aspect-[3/5] aspect-[4/5] w-full'}>
                                        <Image src={mainImage}
                                               alt={'detailed product image'} fill className={''} className={'object-contain'}/>
                                    </div>
                                </div>
                                <div className={'sm:hidden block w-full'}>
                                    <ProductImageSlider images={productById?.data?.product?.images}/>
                                </div>
                                <div className={'lg:w-1/2 w-full '}>
                                    <div className={'flex flex-col items-start space-y-3  w-full'}>
                                        <h6 className={'font-normal text-black text-2xl font-GothamPro'}>Коротко о
                                            товаре</h6>
                                        {
                                            language === 'ru' ?
                                                productById?.data?.product?.aboutRu.map(about => (
                                                    <div key={about?._id}
                                                         className={'font-GothamPro grid grid-cols-2  w-full gap-10'}>
                                                        <p className={'text-secondary break-words '}>{about?.variable}</p>
                                                        <span className={'break-words '}>{about?.value}</span>
                                                    </div>

                                                ))
                                                :
                                                productById?.data?.product?.aboutUz.map(about => (
                                                    <div key={about?._id}
                                                         className={'font-GothamPro grid grid-cols-2  w-full gap-10'}>
                                                        <p className={'text-secondary break-words '}>{about?.variable}</p>
                                                        <span className={'break-words '}>{about?.value}</span>
                                                    </div>

                                                ))
                                        }

                                    </div>
                                    <div className={'mt-3'}>
                                        <div className={'break-all overflow-hidden'}>
                                            <div className={showDesc ? 'block' : 'hidden'}
                                                 dangerouslySetInnerHTML={{__html: language === 'ru' ? productById?.data?.product?.descriptionRu : productById?.data?.product?.descriptionUz}}>
                                            </div>

                                        </div>
                                        <p onClick={showDescription}
                                           className={'font-GothamPro text-primary text-base underline'}>{t('more')}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>
            <div className={'container mx-auto'}>
                <TitleSection text={t('popularGoods')}/>
                <div className={'grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'}>
                    {
                        productLoading ? Array(5).fill('').map((_, ind) => <Skeleton height={300} key={ind}/>)
                            :
                            productData?.data?.products.map(product => (
                                <ProductCard key={product?._id} id={product?._id} images={product?.images}
                                             title={language === 'ru' ? product?.titleRu : product?.titleUz}/>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetailed;