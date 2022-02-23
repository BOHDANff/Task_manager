import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import {checkAuth} from "../store/reducers/actionCreators/AuthActionCreator";

const PrivatePath = ({children}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    useEffect(() => {
        dispatch(checkAuth())
    }, [isAuth])

    if (!isAuth) {
        return <Navigate to="/" />
    }
    return children
};

export default PrivatePath;