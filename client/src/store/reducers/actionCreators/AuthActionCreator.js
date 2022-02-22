import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";


export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user, {rejectWithValue}) => {
        try {
            const response = await AuthService.signIn(user.email, user.password)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }

    }
)