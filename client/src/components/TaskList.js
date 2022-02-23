import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import BasicModal from "./UI/MyModal";
import CreateForm from "./Forms/CreateForm";
import {useDispatch, useSelector} from "react-redux";
import Task from "./Task";
import {fetchTasks} from "../store/reducers/actionCreators/TaskActionCreator";

const TaskList = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.user.id)
    const tasks = useSelector(state => state.task.tasks)
    useEffect(() => {
        dispatch(fetchTasks(userId))
    }, [])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    return (
        <div style={{display: "flex", flexDirection: "column", paddingTop: "20%",}}>
            <BasicModal open={open} onClose={handleClose}><CreateForm onClose={handleClose}/></BasicModal>
            <Button variant="contained"
                    color="primary"
                    style={{marginBottom: "20px"}}
                    onClick={handleOpen}>Create task</Button>

            {tasks.map(task =>
                (<Task id={task._id}
                       key={task._id}
                       title={task.title}
                       desc={task.description}
                       priority={task.priority}
                       dueDate={task.dueDate}
                       isDone={task.isDone}/>)
            )}
        </div>
    );
};

export default TaskList;