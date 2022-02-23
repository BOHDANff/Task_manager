import {createSlice} from "@reduxjs/toolkit";
import {createTask, fetchTasks} from "./actionCreators/TaskActionCreator";


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
    }
})

export default taskSlice.reducer