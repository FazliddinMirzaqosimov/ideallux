import Image from "next/image";
import loading from '/public/loading/loading.gif'
const Loading = () => {

    return (
        <div className={'w-full h-screen fixed z-[99999]  '}>
            <div className={'bg-secondary opacity-50 w-full h-full'}></div>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'}>
            <Image src={loading} alt={'loading'} width={100} height={100} />

            </div>
        </div>
    );
};

export default Loading;