import {createSlice} from "@reduxjs/toolkit";


const initialState={
    id:''
}

export const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        categoryById:(state,{payload})=>{
            state.id=payload
        }
    }
})

export const {categoryById}=CategorySlice.actions

export default CategorySlice.reducer