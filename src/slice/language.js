import {createSlice} from "@reduxjs/toolkit";

const initialState={
    lang:'ru'
}

export const LanguageSlice=createSlice({
    name:'lang',
    initialState,
    reducers:{
        changeLanguages:(state,{payload})=>{
            state.lang=payload
        }
    }
})

export const {changeLanguages}=LanguageSlice.actions
export default LanguageSlice.reducer