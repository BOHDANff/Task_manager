import {createAsyncThunk} from "@reduxjs/toolkit";
import TaskService from "../../../services/TaskService";


export const createTask = createAsyncThunk(
    'task/create',
    async ({task, userId}, {rejectWithValue}) => {
        try {
            const response = await TaskService.create(task, userId)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }
    }
)

export const fetchTasks = createAsyncThunk(
    'task/fetch',
    async ( userId, {rejectWithValue}) => {
        try {
            const response = await TaskService.getAll(userId)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }
    }
)