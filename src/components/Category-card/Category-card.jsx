import Image from "next/image";


const CategoryCard = ({image, text, isCard,isActive}) => {

    return (
        <div
            className={`  ${isCard ? 'relative w-full 2xl:h-[450px] xl:h-[400px] lg:h-[350px] h-[300px] flex justify-center items-center overflow-hidden' : 'h-full flex flex-col justify-between'} cursor-pointer rounded-xl group  shadow ${isActive ? 'bg-primary text-white': 'bg-bgCard'}`}>
            <p className={`duration-700  font-bold  lg:text-xl sm:text-lg text-sm px-6 font-GothamPro h-[15%]   ${isCard ? ' group-hover:text-white text-black absolute top-10 z-50' : `font-normal break-words  px-6 py-3 ${isActive ? 'text-white' : 'text-secondary'}`} `}>{text}  </p>
            {
                isCard &&
                <>
                    <div
                        className={'absolute ml-[120px] mt-24  w-0 h-0 bg-primary rounded-full z-10 group-hover:w-[200%] group-hover:h-[200%] duration-500'}></div>
                    <div
                        className={` relative  w-[80%] h-[80%] top-10 z-20`}>
                        <Image src={image?.location} alt={'category image '} className={'object-contain object-center'}
                               layout={'fill'}/>
                    </div>
                </>
            }
        </div>
    );
};

export default CategoryCard;