import {React, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./StartingPage.css";
import NewChatForm from "../NewChatForm/NewChatForm";
import JoinChatForm from "../JoinChatForm/JoinChatForm";

const StartingPage = () => {
    const [open, setOpen] = useState(false);
    const [joinChatFormOpen, setJoinChatFormOpen] = useState(false);

    return(
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        ChatApp
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className="startPageButtonContainer">
                <Button onClick={() => setJoinChatFormOpen(true)}>Enter a ChatRoom</Button>
                <Button onClick={() => setOpen(true)}>Create new ChatRoom</Button>
            </div>

            <NewChatForm open={open} setOpen={setOpen} />
            <JoinChatForm open={joinChatFormOpen} setOpen={setJoinChatFormOpen} />
        </div>
    )
}

export default StartingPage;