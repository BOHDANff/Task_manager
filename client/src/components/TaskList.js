import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import BasicModal from "./UI/MyModal";
import CreateForm from "./Forms/CreateForm";

const TaskList = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <BasicModal open={open} onClose={handleClose}><CreateForm/></BasicModal>
            <Button variant="contained"
                    color="primary"
                    onClick={handleOpen}
            >Create post</Button>
        </div>
    );
};

export default TaskList;