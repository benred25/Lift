import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Goals from './components/Goals/Goals';
import useStyles from './styles';



const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Lift</Typography>
            </AppBar>
        </Container>
    );
};

export default App;