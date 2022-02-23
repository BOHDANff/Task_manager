import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./reducers/AuthReducer";
import taskReducer from "./reducers/TaskReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})