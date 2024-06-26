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
        signInStart : (state) => {          //using this action for signIn,Update,Delete and signout
            state.loader = true;
        },
        signInSuccess: (state,action) => {           //using this action for signIn,Update
            state.currentUser = action.payload;
            state.loader=false;
            state.errorMsg=false;
        },
        signInFailure: (state,action) => {          //using this action for signIn,Update,Delete and signout
            state.loader = false;
            state.errorMsg = action.payload
        },
        deleteSuccess: (state) => {          //using this action for Delete and signout
            state.currentUser = null;
            state.loader=false;
            state.errorMsg=false;
        },
    }
})

export const { signInStart,signInSuccess, signInFailure, deleteSuccess} = userSlice.actions;

export default userSlice.reducer