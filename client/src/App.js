import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Goals from './components/Goals/Goals';
import Lifts from './components/Lifts/Lifts';
import { getGoals } from "./actions/goals";
import { getLifts } from "./actions/lifts";
import useStyles from './styles';



const App = () => {
    const [currentGoalId, setCurrentGoalId] = useState(0);
    const [currentLiftId, setCurrentLiftId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getGoals());
    }, [currentGoalId, dispatch]);

    useEffect(() => {
        dispatch(getLifts());
    }, [currentLiftId, dispatch]);

    return (
        <Container maxWidth="xl">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Lift</Typography>
            </AppBar>
            <Grid container spacing={3} justifyContent="center">
                <Grow in>
                        <Grid item xs={3}>
                            <Goals setCurrentId={setCurrentGoalId} currentId={currentGoalId} />
                        </Grid>
                </Grow>
                <Grow in>
                        <Grid item xs={5}>
                            <Lifts setCurrentId={setCurrentLiftId} currentId={currentLiftId} />
                        </Grid>
                </Grow>
            </Grid>
        </Container>
    );
};

export default App;