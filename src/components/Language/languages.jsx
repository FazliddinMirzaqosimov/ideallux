import Image from "next/image";
import uzflag from '../../../public/UZ.png'
import ruflag from '../../../public/RU.png'
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {changeLanguages} from "@/slice/language";


const options = [
    {  value: "ru",label: 'Русский', imageSrc: ruflag},
    { value: "uz",label: 'Uzbek', imageSrc: uzflag },
];
const Languages = ({color}) => {
    const {i18n}=useTranslation()
    const dispatch=useDispatch()
    const changeLang=(e)=>{

        const lang=e.target.value
        dispatch(changeLanguages(lang))
        i18n.changeLanguage(lang)
        localStorage.setItem('lang',lang)
    }

    return (
        <div>
            <select
                onChange={(e)=>changeLang(e)}
                className={` text-${color} bg-transparent cursor-pointer text-xs  hover:border-gray-400 focus:outline-none font-GothamPro`}>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className={'text-black '}>

                        {/*<Image src={option.imageSrc} alt={option.value} width={16} height={16} suppressHydrationWarning={true}/>*/}
                        {option.label}
                    </option>
                ))}

            </select>

        </div>
    );
};

export default Languages;