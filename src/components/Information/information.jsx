import InformationCard from "@/components/Information/information-card";
import {infoSite} from "@/config/informationsConfig";
const Information = () => {
    return (
        <div className={'sm:bg-primary'}>
            <div className={'container mx-auto grid lg:grid-cols-4 sm:grid-cols-2  sm:gap-14 gap-3 sm:py-5 xl:px-24 sm:px-6'}>
                {
                    infoSite.map(info=>(
                <InformationCard key={info.id} icon={info.icon} text={info.text} title={info.title} />

                    ))
                }
            </div>
        </div>
    );
};

export default Information;