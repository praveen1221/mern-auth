import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loader : false,
    errorMsg:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        signInStart : (state) => {
            state.loader = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loader=false;
            state.errorMsg=false;
        },
        signInFailure: (state,action) => {
            state.loader = false;
            state.errorMsg = action.payload
        }
    }
})

export const { signInStart,signInSuccess, signInFailure} = userSlice.actions;

export default userSlice.reducer