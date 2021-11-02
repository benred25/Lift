import React from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

import Goal from './Goal/Goal';
import GoalForm from './GoalForm/GoalForm';
import useStyles from './styles';

const Goals = () => {
    const goals = useSelector((state) => state.goals);
    const classes = useStyles();

    return (
        <Stack spacing={2}>
            <GoalForm />
            {goals.map((goal) => (
                <Grid key={goal._id} item>
                    <Goal goal={goal} />
                </Grid>
            ))}
        </Stack>
    );
};

export default Goals;