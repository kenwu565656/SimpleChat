import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const NameForm = ({ open, setOpen, setUserName }) => {
    const [name, setName] = useState("");

    const handleConfirmName = () => {
        setUserName(name);
        setOpen(false);
}

    const happyAdd = () => {
        alert("success");
        setOpen(false);
    }


    return(
        <Dialog open={open}>
            <DialogTitle>
                Please Enter Your Name
            </DialogTitle>
            <DialogContent>
                <TextField autoFocus fullWidth label="Name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={() => handleConfirmName()}>Confirm</Button>
                <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default NameForm;