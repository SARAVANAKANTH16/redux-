import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

const initialState = {
    count:0,
}

const CounterSlice = createSlice ({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{
            state.reset=0;
        },
        incrementbyAmount:(state,action)=>{
            state.count+=action.payload;
        }


    }
});


export const [increment,decrement,reset,incrementByAmount] = CounterSlice.actions;
export default CounterSlice.reducer;
