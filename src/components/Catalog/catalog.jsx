import {CategoryCard} from "@/components";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useRouter} from "next/router";
import Skeleton from "react-loading-skeleton";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

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
        <div className={'grid  xl:grid-cols-6 lg:grid-cols-4 grid-cols-3  grid-rows-2  gap-2'}>
            {
                isLoading ? Array(6).fill('').map((_,ind)=> <Skeleton  height={400} key={ind}/>)
                    :
                data?.data?.categories.map(category => (
                    <div key={category?._id} onClick={() => categoryClick(category._id)} className={`${category?.nameRu=== 'Мини печи' || category?.nameRu=== 'Настольная газовая плита' ? 'row-span-1' : 'row-span-2'}`}>
                        <CategoryCard isCard={true} image={category?.image} id={category?._id} text={language==='ru' ? category?.nameRu : category?.nameUz}
                                      id={category?._id}/>
                    </div>

                ))
            }

        </div>
    );
};

export default Catalog;