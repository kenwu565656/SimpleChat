import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const JoinChatForm = ({ open, setOpen }) => {
    const [roomId, setRoomId] = useState("");
    const [password, setPassword] = useState("");
    const [path, setPath] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleEnterChatRoom = () => {
        fetch("http://localhost:8080" + "/check",
        {method: 'POST',
    headers:{'Content-Type': 'application/json',},
    body: JSON.stringify({roomName: roomId, password: password})
    })
    .then(res => console.log((res.json().then(result => handlePromise(result)))))
    .catch(err => console.log(err))
}

    const handlePromise = (result) => {
        console.log(result);
        if(result["exist"] == "false"){
            alert("Chat Room do not exist");
        }else{
            console.log(result["id"]);
            setPath("/chat/" + result["id"]);
            setRedirect(true);
        }
    }


    return(
        redirect?<Navigate to={{pathname: path}}/>:
        <Dialog open={open}>
            <DialogTitle>
                Enter Chat Room
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus fullWidth label="Room Id" placeholder="Room Id" value={roomId} onChange={(event) => setRoomId(event.target.value)}/>
                <TextField fullWidth label="Password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => handleEnterChatRoom()}>Confirm</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinChatForm;