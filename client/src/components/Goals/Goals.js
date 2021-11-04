import React from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

import Goal from './Goal/Goal';
import GoalForm from './GoalForm/GoalForm';
import useStyles from './styles';

const Goals = ({ currentId, setCurrentId }) => {
    const goals = useSelector((state) => state.goals);
    const classes = useStyles();
    console.log("goals");
    console.log(goals);
    return (
        <Stack spacing={2} container alignItems="stretch">
            <GoalForm setCurrentId={setCurrentId} currentId={currentId} />
            {goals.map((goal) => (
                <Grid key={goal._id} item>
                    <Goal goal={goal} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Stack>
    );
};

export default Goals;