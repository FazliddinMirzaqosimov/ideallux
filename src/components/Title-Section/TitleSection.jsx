import {useTranslation} from "react-i18next";

const TitleSection = ({text}) => {
    const {t}=useTranslation()
    return (
        <div className={'w-full md:text-start text-center mb-12 '}>
        <h1 className={'font-normal lg:text-5xl text-3xl sm:text-4xl underline decoration-primary font-GothamPro font-bold '}>
            {t(text)}
        </h1>

        </div>
    );
};

export default TitleSection;