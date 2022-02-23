import React from 'react';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {signOut} from "../../store/reducers/actionCreators/AuthActionCreator";

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Task Manager
                    </Typography>
                    <Button color="inherit" onClick={() => dispatch(signOut())} >Sign out</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;