import React from 'react';
import {useTranslation} from "react-i18next";

const _404 = () => {
    const {t}=useTranslation()
    return (
        <div className={'bg-bgColor min-h-[90vh] sm:py-16 py-12 flex items-center justify-center'}>
            <div className={'container mx-auto '}>
                    <h1 className={'font-bold font-GothamPro lg:text-[180px] md:text-[140px] sm:text-[100px] text-[64px] text-primary text-center'}>
                        404
                    </h1>
                    <h6 className={'font-bold font-GothamPro lg:text-4xl md:text-2xl sm:text-xl text-lg  text-black text-center mb-3 '}>
                        {t('pageNotFound.title')}
                    </h6>
                    <p className={'font-normal font-GothamPro sm:text-lg text-sm text-secondary text-center '}>
                        {t('pageNotFound.info')}
                    </p>

            </div>
        </div>
    );
};

export default _404;