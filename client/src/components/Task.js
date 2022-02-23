import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const Task = (props) => {
    return (
        <Card sx={{minWidth: 275}} style={{marginBottom: "20px"}} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Task;