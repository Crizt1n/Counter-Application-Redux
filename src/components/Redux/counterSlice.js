import { createSlice } from "@reduxjs/toolkit";

//A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
//The reducer argument is passed to createReducer()

export const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside this reducers 
    reducers:{
        //logics to update state

        //logic to increment number 
        increment:(state, action)=>{
            //if its an argument function then it can only  accessed by action and value in payload
            state.value += action.payload
        },

        //logic to decrement number
        decrement:(state, action)=>{
            //if its an argument function then it can only  accessed by action and value in payload
            state.value -= action.payload
        },

        //function/logic to reset number
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is required by component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer