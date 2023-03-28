import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     cart:[],
//     quantity:0
// }

const microReducer=createSlice({
    name:"cart",
   initialState:[],
    reducers:{
        saveProfile:(state,action)=>{
            state.push(action.payload);
        }
    }
})
export default microReducer.reducer;
export const {saveProfile}=microReducer.actions;