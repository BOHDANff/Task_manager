import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default taskSlice.reducer