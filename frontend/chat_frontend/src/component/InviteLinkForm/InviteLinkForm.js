import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InviteLinkForm = ({ open, setOpen, roomId }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText("localhost:3000/chat/" + roomId); 
        
        toast.success("Copied to clipboard",{
            position: toast.POSITION.TOP_CENTER
        });
        setOpen(false);
    }
    
    return(
        <div>
        <Dialog open={open}>
            <DialogTitle>
                Send This Link To Invite Your Friends!
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus fullWidth label="Invite Link" value={"localhost:3000/chat/" + roomId}/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => handleCopy()}>Copy</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <ToastContainer autoClose={1000} />
        </div>
    )
}

export default InviteLinkForm;