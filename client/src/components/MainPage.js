import React from 'react';
import Navbar from "./UI/Navbar";
import {useSelector} from "react-redux";
import TaskList from "./TaskList";

const MainPage = () => {
    const {user} = useSelector(state => state.auth)
    return (user.confirmedAt
            ? <>
                <Navbar/>
                <TaskList/>
            </>
            : <div>
                <h1>You have been sent the confirmation message on your email address.</h1>
                <h1 style={{marginTop: "20px"}}>Please go to your email and confirm it</h1>
            </div>

    );
};

export default MainPage;