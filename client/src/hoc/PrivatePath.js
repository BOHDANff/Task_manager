import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'

const PrivatePath = ({children}) => {
    // const isAuth = useSelector(state => state.auth.isAuth)

    if (!localStorage.getItem('token')) {
        return <Navigate to="/auth" />
    }
    return children
};

export default PrivatePath;