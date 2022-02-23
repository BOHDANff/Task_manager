import {createSlice} from "@reduxjs/toolkit";
import {createTask, deleteTask, fetchTasks} from "./actionCreators/TaskActionCreator";


const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: {
        [createTask.fulfilled]: (state, action) => {
            state.tasks.push(action.payload)
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.tasks = action.payload
        },
        [deleteTask.fulfilled]: (state, action) => {
            state.tasks = state.tasks.filter(task => task._id !== action.payload._id)
        },
    }
})

export default taskSlice.reducer