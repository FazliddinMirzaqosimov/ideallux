import {createSlice} from "@reduxjs/toolkit";


const initialState={
    search:''
}

export const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        searchData:(state,{payload})=>{
            state.search=payload
        }
    }
})

export const {searchData}=CategorySlice.actions

export default CategorySlice.reducer