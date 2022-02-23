import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import axios from "axios";
import {API_URL} from "../../../http";


export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user, {rejectWithValue}) => {
        try {
            const response = await AuthService.signIn(user.email, user.password)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }})

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (user, {rejectWithValue}) => {
        try {
            const response = await AuthService.signUp(user.email, user.password, user.username)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }})

export const signOut = createAsyncThunk(
    'auth/signOut',
    async (user, {rejectWithValue}) => {
        try {
            const response = await AuthService.signOut()
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }})

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (user, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${API_URL}auth/refresh`, {
                withCredentials: true,
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }})