import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';
import { createGoal } from '../../../actions/goals';

const GoalForm = () => {
    const [goalData, setGoalData] = useState({ exercise: '', sets: '', reps: '', weight: '' });
    const dispatch = useDispatch();
    const classes = useStyles();

    const clear = () => {
        setGoalData({ exercise: '', sets: '', reps: '', weight: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createGoal(goalData));
        clear();
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Goal</Typography>
                <TextField name="exercise" variant="outlined" label="Exercise" fullWidth value={goalData.exercise} onChange={(e) => setGoalData({ ...goalData, exercise: e.target.value })} />
                <TextField name="sets" variant="outlined" label="Sets" fullWidth inputProps={{ type: 'number'}} value={goalData.sets} onChange={(e) => setGoalData({ ...goalData, sets: e.target.value })} />
                <TextField name="reps" variant="outlined" label="Reps" fullWidth inputProps={{ type: 'number'}} value={goalData.reps} onChange={(e) => setGoalData({ ...goalData, reps: e.target.value })} />
                <TextField name="weight" variant="outlined" label="Weight" fullWidth inputProps={{ type: 'number'}} value={goalData.weight} onChange={(e) => setGoalData({ ...goalData, weight: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default GoalForm;