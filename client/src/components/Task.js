import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteTask} from "../store/reducers/actionCreators/TaskActionCreator";

const Task = (props) => {
    const dispatch = useDispatch()
    return (
        <Card sx={{minWidth: 275}} style={{marginBottom: "20px"}} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small" onClick={() => dispatch(deleteTask(props.id))}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Task;