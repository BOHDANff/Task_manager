import React, {useEffect} from 'react';
import Navbar from "./UI/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../store/reducers/actionCreators/AuthActionCreator";

const MainPage = () => {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(checkAuth())
    // }, [user.confirmedAt])
    return (user.confirmedAt
            ? <>
                <Navbar/>
            </>
            : <div>
                <h1>You have been sent the confirmation message on your email address.</h1>
                <h1 style={{marginTop: "20px"}}>Please go to your email and confirm it</h1>
            </div>

    );
};

export default MainPage;