import {Button, ProductImageSlider} from "@/components";
import {RiEyeLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";
import NewProduct from '/public/New label.png'
import Image from "next/image";

const ProductCard = ({images, title,id,isNew}) => {
    const  {t}=useTranslation()
    const router=useRouter()
    const productDetailed=()=>{
        router.push(`/product/${id}`)
    }

    return (
        <div className={'relative py-8 px-3 rounded-xl shadow-xl flex flex-col justify-between space-y-3 bg-white border'}>
            {
                isNew && <Image className={'absolute top-3 right-3 z-40'} src={NewProduct} width={80} height={80} alt={'new product'}/>
            }
            <div className={'space-y-3'}>
                <ProductImageSlider images={images}/>
                <p className={'break-all font-normal text-base font-roboto'}>{title}</p>

            </div>
            <Button text={t('see')} handleClick={productDetailed} icon={<RiEyeLine className={'text-white text-xl'}/>} bg={'primary'} color={'white'}/>
        </div>
    );
};

export default ProductCard;