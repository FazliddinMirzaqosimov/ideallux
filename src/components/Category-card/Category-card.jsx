import Image from "next/image";


const CategoryCard = ({image, text, isCard,isActive}) => {

    return (
        <div
            className={`  ${isCard ? 'relative w-full 2xl:h-[450px] xl:h-[400px] lg:h-[350px] h-[300px] flex justify-center items-center overflow-hidden' : 'h-full flex flex-col justify-between'} cursor-pointer rounded-xl group  shadow ${isActive ? 'bg-primary text-white': 'bg-bgCard'}`}>
            <p className={`   duration-700  font-bold xl:text-2xl lg:text-xl sm:text-lg text-sm px-6 font-roboto   ${isCard ? ' group-hover:text-white text-black absolute top-10 z-50' : `font-normal break-words  px-6 py-3 ${isActive ? 'text-white' : 'text-secondary'}`} `}>{text}  </p>
            {
                isCard &&
                <>
                    <div
                        className={'absolute ml-[120px] mt-24  w-0 h-0 bg-primary rounded-full z-10 group-hover:w-[200%] group-hover:h-[200%] duration-500'}></div>
                    <div
                        className={`absolute bottom-0 -right-5 2xl:w-[85%] xl:w-[95%] w-[90%] 2xl:aspect-[3/5] lg:aspect-[4/5] aspect-[3/3] z-20`}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/img/${image.name}`} alt={'category image'}
                               layout={'fill'}/>
                    </div>
                </>
            }
        </div>
    );
};

export default CategoryCard;