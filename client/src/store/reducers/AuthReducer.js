import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, signIn, signOut, signUp} from "./actionCreators/AuthActionCreator";

const initialState = {
    isAuth: false,
    user: {},
    isLoading: false,
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
            state.isLoading = false
            console.log(action.payload)
        },
        [signIn.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
        },
        [signUp.pending]: (state, action) => {
            state.isLoading = true
        },
        [signUp.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.isLoading = false
            state.user = action.payload.user
            console.log(action.payload)
        },
        [signUp.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
        },
        [signOut.fulfilled]: (state, action) => {
            localStorage.removeItem('token')
            state.isAuth = false
            state.user = {}
            console.log(action.payload)
        },
        [checkAuth.pending]: (state, action) => {
            state.isLoading = true
        },
        [checkAuth.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            state.isLoading = false
            console.log(action.payload)
        },
        [checkAuth.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
        },

    }
})

// export const {setErrorMessage} = authSlice.actions
export default authSlice.reducer