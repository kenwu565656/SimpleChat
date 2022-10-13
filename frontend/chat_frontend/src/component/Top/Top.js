import {React, useState} from "react";
import "./Top.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Navigate } from "react-router-dom";
import InviteLinkForm from "../InviteLinkForm/InviteLinkForm"

const Top = (roomId) => {
    const [quit, setQuit] = useState(false);
    const [inviteOpen, setInviteOpen] = useState(false);
    return(
        quit?<Navigate to="/" />:
        <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        ChatApp
                    </Typography>
                    <div className="TopButtonContainer">
                        <Button color="primary" onClick={() => setInviteOpen(true)}>Invite</Button>
                        <Button color="secondary" onClick={() => setQuit(true)}>Quit</Button>
                    </div>
                    
                    
                </Toolbar>
                <InviteLinkForm open={inviteOpen} setOpen={setInviteOpen} roomId = {roomId["roomId"]}/>
            </AppBar>
            
    )
}

export default Top;