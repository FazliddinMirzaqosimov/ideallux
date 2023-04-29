import {useTranslation} from "react-i18next";

const InformationCard = ({icon,title,text}) => {
    const {t}=useTranslation()
    return (
        <div className={'flex space-x-3 items-start sm:border-0 border sm:py-0 py-5 sm:px-0 px-4'}>
            <div className={'h-12 w-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 sm:text-primary sm:stroke-primary stroke-secondary'}>
                {icon}
            </div>
            <div className={'flex flex-col items-start space-y-1'}>
                <h6 className={'sm:text-white text-black sm:text-lg text-base sm:font-bold font-normal GothamPro'}>{t(title)}</h6>
                <p className={' font-normal sm:text-white text-secondary sm:text-sm text-xs font-GothamPro'}>{t(text)}</p>
            </div>
        </div>
    );
};

export default InformationCard;