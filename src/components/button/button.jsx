import {useTranslation} from "react-i18next";

const Button = ({icon, text, bg, color,handleClick}) => {
    const {t}=useTranslation()
    return (
        <button
            onClick={handleClick}
            className={`text-${color} ${bg==='transparent' ? ' xs:py-3 xs:px-6' : 'py-3 px-6'} rounded w-full  bg-${bg} flex justify-center items-center space-x-4 font-GothamPro font-bold` }>
            {icon}
            <p className={'whitespace-nowrap '}>
                {t(text)}
            </p>
        </button>
    );
};

export default Button;