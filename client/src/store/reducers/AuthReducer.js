import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, signIn, signOut, signUp} from "./actionCreators/AuthActionCreator";

const initialState = {
    isAuth: false,
    user: {},
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
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            console.log(action.payload)
        },
        [signUp.rejected]: (state, action) => {
            console.log(action.payload)
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

export const {setErrorMessage} = authSlice.actions
export default authSlice.reducer