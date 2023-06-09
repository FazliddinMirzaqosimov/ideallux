import React, {useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {searchData} from "@/slice/search";

const Search = ({isState,setShow}) => {
    const {t} = useTranslation()
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()
    const searchHandle = () => {
        if (search !== "") {
            dispatch(searchData(search))
            setSearch("")
            router.push('/category/all')
            if (isState){
                setShow(false)
            }
        }
    }
    return (
        <div className={'flex items-center w-full md:bg-white bg-bgCard md:border-primary border rounded'}>
            <input type="text" placeholder={t('searchPlaceholder')}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className={'w-full px-6 py-[11px] bg-transparent  outline-none'}/>
            <button onClick={searchHandle}
                    className={'text-white md:py-3 py-2 px-6  md:bg-primary flex items-center space-x-4 font-GothamPro font-bold'}>
                <RiSearchLine className={'md:text-white text-secondary'}/>
                <p className={'md:block hidden'}>{t('search')}</p>
            </button>
        </div>
    );
};

export default Search;