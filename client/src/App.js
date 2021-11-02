import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Goals from './components/Goals/Goals';
import { getGoals } from "./actions/goals";
import useStyles from './styles';



const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getGoals());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Lift</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid item xs={4}>
                        <Goals setCurrnetId={setCurrentId} />
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;