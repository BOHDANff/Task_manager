import {createSlice} from "@reduxjs/toolkit";
import {signIn, signUp} from "./actionCreators/AuthActionCreator";

const initialState = {
    isAuth: false,
    user: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            console.log(action.payload)
        },
        [signIn.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [signUp.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [signUp.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})


export default authSlice.reducer