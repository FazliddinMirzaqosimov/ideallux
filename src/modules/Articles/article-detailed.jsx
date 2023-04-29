import React, {useEffect, useState} from 'react';
import {ArticleCard, ArticleDescription, TitleSection} from "@/components";
import Image from "next/image";
import {TbClockHour6} from "react-icons/tb";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useRouter} from "next/router";
import moment from "moment/moment";
import {useSelector} from "react-redux";
import Skeleton from "react-loading-skeleton";


const ArticleDetailed = () => {
    const router = useRouter()
    const {articleId} = router.query
    const {
        data: articleData,
        isLoading: articleLoading
    } = useQuery('get-article-rec', () => apiService.getData('/articles?page=1&limit=3'))
    const {
        data: articleById,
        isLoading: articleByIdLoading
    } = useQuery(['get-article', articleId], () => apiService.getDataByID('/articles', articleId))

    const {lang} = useSelector(state => state.lang)
    const [language, setLanguage] = useState('')
    useEffect(() => {
        setLanguage(lang)
    }, [lang])


    return (
        <div className={'bg-bgColor min-h-[90vh] sm:py-16 py-12 sm:space-y-16 space-y-12'}>
            <div className={' sm:px-0 px-3 sm:container sm:mx-auto '}>
                <TitleSection text={'Полезные статьи'}/>

                <div className={'sm:bg-white'}>
                    {/*title    */}
                    <div className={'relative w-full lg:aspect-[5/2] aspect-[2/1] '}>
                        {
                            articleByIdLoading ? <Skeleton height={330}/>
                                :
                                <Image
                                    src={articleById?.data?.article?.mainImage?.location}
                                    alt={'article-detailed'} layout={'fill'}/>
                        }
                    </div>
                    <div className={'lg:py-12 lg:px-12 sm:py-8 sm:px-8 py-3 '}>
                        {
                            articleByIdLoading ? <Skeleton height={30}/>
                                :
                                <div className={'flex items-start justify-between'}>
                                    <div className={'space-y-3'}>
                                        <h5 className={'font-bold lg:text-4xl sm:text-2xl text-lg text-primary font-roboto'}>
                                            {language === 'ru' ? articleById?.data?.article?.titleRu : articleById?.data?.article?.titleUz}
                                        </h5>
                                    </div>
                                    <div
                                        className={'sm:flex items-center space-x-2 text-secondary flex-shrink-0 hidden'}>
                                        <TbClockHour6/>
                                        <p className={'font-roboto'}>
                                            {moment(articleById?.data?.article?.created).fromNow()}
                                        </p>
                                    </div>
                                </div>
                        }
                    </div>
                    {/*descriptions*/}
                    <div className={'lg:py-12 2xl:px-34 xl:px-30 lg:px-24 md:px-16 sm:py-8 sm:px-8 py-3 space-y-16 '}>
                        {
                            articleByIdLoading ? Array(2).fill('').map((_, ind) => <Skeleton height={400} key={ind}/>)
                                :
                                articleById?.data?.article?.body?.map(item => (
                                    <ArticleDescription key={item?._id}
                                                        description={language === 'ru' ? item?.descriptionRu : item?.descriptionUz}
                                                        image={item?.image}/>

                                ))
                        }
                    </div>
                </div>

            </div>
            <div className={'container mx-auto'}>

                <TitleSection text={'Рекомендуем к прочтению'}/>
                <div className={'grid xl:grid-cols-3 md:grid-cols-2 gap-3'}>
                    {
                        articleLoading ? Array(3).fill('').map((_, ind) => <Skeleton height={450} key={ind}/>)
                            :
                            articleData?.data?.articles.map(article => (
                                <ArticleCard key={article._id} created={article?.created} image={article?.mainImage}
                                             title={language === 'ru' ? article?.titleRu : article?.titleUz}
                                             id={article?._id}/>

                            ))
                    }


                </div>
            </div>

        </div>
    );
};

export default ArticleDetailed;