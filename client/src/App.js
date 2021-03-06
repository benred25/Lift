import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import Goals from './components/Goals/Goals';
import Lifts from './components/Lifts/Lifts';
import Friends from './components/Friends/Friends';
import User from './components/User/User';
import { getGoals } from "./actions/goals";
import { getLifts } from "./actions/lifts";
import { getUsers } from "./actions/users";
import useStyles from './styles';



const App = () => {
    const [currentGoalId, setCurrentGoalId] = useState(0);
    const [currentLiftId, setCurrentLiftId] = useState(0);
    const user = useSelector((state) => state.users).filter((user) => user.current)[0];
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getLifts());
    }, [currentLiftId, dispatch]);

    useEffect(() => {
        dispatch(getGoals());
    }, [currentGoalId, dispatch]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);


    return (
        <Container maxWidth="xxl">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Lift</Typography>
            </AppBar>
            <Grid container spacing={3} justifyContent="center">
                <Grow in>
                    <Grid item xs={2}>
                        <User />
                    </Grid>
                </Grow>
                <Grow in>
                    <Grid item xs={4}>
                        <Lifts userId={user._id} setCurrentId={setCurrentLiftId} currentId={currentLiftId} />
                    </Grid>
                </Grow>
                <Grow in>
                    <Grid item xs={2}>
                        <Goals userId={user._id} setCurrentId={setCurrentGoalId} currentId={currentGoalId} />
                    </Grid>
                </Grow>
                <Grow in>
                    <Grid item xs={2}>
                        <Friends />
                    </Grid>
                </Grow>
            </Grid>
        </Container>
    );
};

export default App;