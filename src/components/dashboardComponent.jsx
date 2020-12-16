import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, SvgIcon, colors } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import AppDrawer from "./appdrawer";
import * as ActionTypes from '../redux/actions/ActionTypes'
import { useDispatch, useSelector } from 'react-redux'
import CreateQuestion from "./createQuestionComponent";
import DisplayQuestion from "./displayQuestionComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(3),
    },
    appbar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#0277bd",
    },
    toolbar: theme.mixins.toolbar,
    buttons: {
        marginRight: theme.spacing(2),
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing(9),
    },
}));

export default function AppbarComponent() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.createQuestionReducer.value);
    const createQuestionHandler = () => {
        dispatch({ type: ActionTypes.SET_CREATE_QUESTION_TRUE, payload: true })
    };
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Appbar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            DashBoard
            </Typography>
                        <Button
                            className={classes.buttons}
                            variant="outlined"
                            style={{ background: colors.blue[100] }}
                            onClick={createQuestionHandler}
                        >
                            Create Question
            </Button>
                    </Toolbar>
                </Appbar>
                {/* <AppDrawer className = {classes.toolbar} /> */}
                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        {selector ? <CreateQuestion questionDetails={null} /> : <DisplayQuestion ></DisplayQuestion>}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}
