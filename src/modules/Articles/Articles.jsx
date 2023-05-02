import React, {useEffect, useState} from 'react';
import {ArticleCard, TitleSection} from "@/components";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import Skeleton from "react-loading-skeleton";
import {useSelector} from "react-redux";

const Articles = () => {
    const {data: articleData, isLoading} = useQuery('get-article', () => apiService.getData('/articles?page=1&limit=3'))
    const {lang}=useSelector(state => state.lang)
    const [language,setLanguage]=useState('')
    useEffect(()=>{
        setLanguage(lang)
    },[lang])

    return (
        <div className={'bg-bgColor min-h-[90vh]'}>
            <div className={'sm:py-16 py-12 container mx-auto '}>

                <TitleSection text={'Полезные статьи'}/>
                <div className={'grid xl:grid-cols-3 md:grid-cols-2 gap-3'}>
                    {
                        isLoading ? Array(3).fill('').map((_,ind) => (
                                <Skeleton   height={500} key={ind}/>
                            ))

                            :
                            articleData?.data?.articles.map(article => (
                                <ArticleCard key={article._id} image={article?.mainImage} created={article?.created}
                                             title={language==='ru' ? article?.titleRu : article?.titleUz} id={article?._id}/>
                            ))
                    }

                </div>
            </div>

        </div>
    );
};

export default Articles;