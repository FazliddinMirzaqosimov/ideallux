import {Button, CategoryCard, ProductCard, TitleSection} from "@/components";
import style from './product.module.scss'
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import Skeleton from "react-loading-skeleton";

const Product = () => {
    const {lang}=useSelector(state => state.lang)
    const [data, setData] = useState([])
    const [categoryIdState, setCategoryIdState] = useState('')
    const [language,setLanguage]=useState('')
    const {search}=useSelector(state => state.search)
    const {t} = useTranslation()


    const {data: productData,isLoading:productLoading} = useQuery('get-products-all', () => apiService.getData('/products'))
    const {data: categorydata} = useQuery('get-category', () => apiService.getData('/categories'))
    const router = useRouter()
    const {categoryId} = router.query

    console.log(search)

    useEffect(() => {
        setCategoryIdState(categoryId)
        if (categoryId === 'all') {
            setData(productData?.data?.products)
        } else {
            const filterById = productData?.data?.products?.filter(product => product?.category?._id === categoryId)
            setData(filterById)
        }

    }, [categoryId, productData])

    useEffect(()=>{
        setLanguage(lang)
    },[lang])
    const changeCategory = (id) => {
        router.push(`/category/${id}`)
        setCategoryIdState(id)
    }

    useEffect(()=>{
        console.log('render')

        const searchData=data.filter(product=>product.titleRu.toLowerCase().includes(search) || product.titleUz.toLowerCase().includes(search))
        setData(searchData)
        console.log(searchData)
    },[search])
    return (
        <div className={'bg-bgColor sm:py-16 py-12 min-h-[90vh]'}>
            <div className={'container mx-auto'}>
                <TitleSection text={'Каталог'}/>
                <div className={'flex lg:flex-row flex-col lg:items-center items-start lg:justify-between '}>
                    {/*category*/}
                    <div
                        className={`${style.category} flex items-center w-full  space-x-3 overflow-x-scroll lg:order-1 order-2`}>
                        <div className={'flex-shrink-0'} onClick={() => changeCategory('all')}>
                            <CategoryCard isCard={false} text={'Все товары'} image={''}
                                          isActive={categoryIdState === 'all'}/>
                        </div>
                        {
                            categorydata?.data?.categories.map(category => (
                                <div key={category?._id} onClick={() => changeCategory(category?._id)}>
                                    <CategoryCard isCard={false} text={language==='ru' ? category?.nameRu : category?.nameUz}
                                                  isActive={categoryIdState === category?._id}/>

                                </div>

                            ))
                        }
                    </div>
                    {/*filter*/}
                    <div className={'flex items-center sm:space-x-6 space-x-3 lg:order-2 order-1 lg:mb-0 mb-3'}>
                        <Button text={t('sort')} bg={'transparent'} color={'black'}
                                icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.32501 12.9084L7.50835 17.0834V2.91669M16.675 7.09169L12.4917 2.91669V17.0834"
                                        stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>}/>

                        {/*<Button text={t('filter')} bg={'transparent'} color={'black'}*/}
                        {/*        icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"*/}
                        {/*                   xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <g clipPath="url(#clip0_791_323)">*/}
                        {/*                <path*/}
                        {/*                    d="M2.79157 1.6665H10.2082C10.8249 1.6665 11.3332 2.17484 11.3332 2.7915V4.02484C11.3332 4.47484 11.0499 5.03317 10.7749 5.3165L8.35824 7.44984C8.02491 7.73317 7.79991 8.2915 7.79991 8.7415V11.1582C7.79991 11.4915 7.57491 11.9415 7.29157 12.1165L6.50824 12.6248C5.77491 13.0748 4.76657 12.5665 4.76657 11.6665V8.6915C4.76657 8.29984 4.54157 7.7915 4.31657 7.50817L2.18324 5.25817C1.89991 4.97484 1.67491 4.47484 1.67491 4.13317V2.8415C1.66657 2.17484 2.17491 1.6665 2.79157 1.6665Z"*/}
                        {/*                    stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"*/}
                        {/*                    strokeLinejoin="round"/>*/}
                        {/*                <path*/}
                        {/*                    d="M1.66699 10V12.5C1.66699 16.6667 3.33366 18.3334 7.50033 18.3334H12.5003C16.667 18.3334 18.3337 16.6667 18.3337 12.5V7.50003C18.3337 4.90003 17.6837 3.2667 16.1753 2.4167C15.7503 2.17503 14.9003 1.9917 14.1253 1.8667M10.8337 10.8334H15.0003M9.16699 14.1667H15.0003"*/}
                        {/*                    stroke="black" strokeWidth="1.5" strokeLinecap="round"*/}
                        {/*                    strokeLinejoin="round"/>*/}
                        {/*            </g>*/}
                        {/*            <defs>*/}
                        {/*                <clipPath id="clip0_791_323">*/}
                        {/*                    <rect width="20" height="20" fill="white"/>*/}
                        {/*                </clipPath>*/}
                        {/*            </defs>*/}
                        {/*        </svg>*/}
                        {/*        }/>*/}

                    </div>
                </div>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12'}>
                    {
                        productLoading ?  Array(4).fill('').map((_,ind)=> <Skeleton  height={350} key={ind}/>)
                        :
                        data?.length === 0 ? <div className={'col-span-4 h-[300px] font-roboto text-black text-lg flex items-center justify-center w-full'}>
                            {t('nothingFound')}
                            </div>
                            :
                            data?.map(product => (
                                <ProductCard key={product._id} id={product._id} images={product?.images}
                                             title={language==='ru' ? product?.titleRu : product?.titleUz}/>
                            ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Product;