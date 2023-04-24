import {configureStore} from "@reduxjs/toolkit";
import  Category from '../slice/category'
import  Language from '../slice/language'
import  Search from '../slice/search'
export const store = configureStore({
    reducer: {
        category:Category,
        lang:Language,
        search:Search
    },
})