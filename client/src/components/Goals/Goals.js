import React from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import {Card, CardContent, Paper, Stack, Typography} from "@mui/material";
import { useSelector } from "react-redux";

import Goal from './Goal/Goal';
import GoalForm from './GoalForm/GoalForm';
import useStyles from './styles';

const Goals = ({ userId, currentId, setCurrentId }) => {
    const goals = useSelector((state) => state.goals);
    const classes = useStyles();

    return (
        <Stack spacing={2} container alignItems="stretch">
            <GoalForm userId={userId} setCurrentId={setCurrentId} currentId={currentId} />
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography sx={{ fontSize: 30}} align="center" gutterBottom>In Progress</Typography>
                </CardContent>
            </Card>
            {goals.filter((goal) => !goal.completed).map((goal) => (
                <Grid key={goal._id} item>
                    <Goal goal={goal} setCurrentId={setCurrentId} />
                </Grid>
            ))}
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography sx={{ fontSize: 30}} align="center" gutterBottom>Completed</Typography>
                </CardContent>
            </Card>
            {goals.filter((goal) => goal.completed).map((goal) => (
                <Grid key={goal._id} item>
                    <Goal userId={userId} goal={goal} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Stack>
    );
};

export default Goals;