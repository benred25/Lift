import React from "react";
import { Stack, Container, CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Goal from './Goal/Goal';
import GoalForm from './GoalForm/GoalForm';
import useStyles from './styles';

const Goals = () => {
    const goals = useSelector((state) => state.goals);
    const classes = useStyles();

    return (
        <Container>
            <GoalForm />
            {goals.map((goal) => (
                <Grid key={goal._id} item>
                    <Goal goal={goal} />
                </Grid>
            ))}
        </Container>
    );
};

export default Goals;