import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, signIn, signOut, signUp} from "./actionCreators/AuthActionCreator";

const initialState = {
    isAuth: false,
    user: {},
    status: false,
    errorMessage: ''
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        isAuth(state, action) {
        },
    },
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            console.log(action.payload)
        },
        [signIn.rejected]: (state, action) => {
            state.errorMessage = `${action.payload}`
        },
        [signUp.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            console.log(action.payload)
            state.status = true
        },
        [signUp.rejected]: (state, action) => {
            state.errorMessage = `${action.payload}`
        },
        [signOut.fulfilled]: (state, action) => {
            localStorage.removeItem('token')
            state.isAuth = false
            state.user = {}
            console.log(action.payload)
        },
        [checkAuth.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            console.log(action.payload)
            state.status = true
        },
        [checkAuth.rejected]: (state, action) => {
            console.log(action.payload)
        },

    }
})


export default authSlice.reducer