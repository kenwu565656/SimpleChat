import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewChatForm = ({ open, setOpen }) => {
    const [roomId, setRoomId] = useState("");
    const [password, setPassword] = useState("");

    const handleAddChatRoom = () => {
        fetch("http://localhost:8080" + "/api/chatRooms",
        {method: 'POST',
    headers:{'Content-Type': 'application/json',},
    body: JSON.stringify({roomName: roomId, password: password})
    })
    .then(res => happyAdd())
    .catch(err => failAdd(err))
}

    const happyAdd = () => {
        toast.success("Created new Chat Room",{position: toast.POSITION.TOP_CENTER});
        setOpen(false);
    }

    const failAdd = (err) => {
        toast.error("Fail to create new chat room",{position: toast.POSITION.TOP_CENTER});
        console.log(err);
    }


    return(
        <div>
        <Dialog open={open}>
            <DialogTitle>
                New Chat Room
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus fullWidth label="Room Id" placeholder="Room Name" value={roomId} onChange={(event) => setRoomId(event.target.value)}/>
                <TextField fullWidth label="Password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => handleAddChatRoom()}>Confirm</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <ToastContainer autoClose={1000} />
        </div>
    )
}

export default NewChatForm;