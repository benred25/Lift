import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';
import {createGoal, updateGoal} from '../../../actions/goals';
import {addPoints} from "../../../actions/users";

const GoalForm = ({ userId, currentId, setCurrentId }) => {
    const [goalData, setGoalData] = useState({ exercise: '', sets: '', reps: '', weight: '' });
    const goal = useSelector((state) => (currentId ? state.goals.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (goal) setGoalData(goal);
    }, [goal]);

    const clear = () => {
        setCurrentId(0);
        setGoalData({ exercise: '', sets: '', reps: '', weight: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createGoal(goalData));
            dispatch(addPoints(userId, 100));
        } else {
            dispatch(updateGoal(currentId, goalData));
        }
        clear();
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit your Goal' : 'Create a Goal'}</Typography>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="exercise-label">Exercise</InputLabel>
                    <Select labelId="exercise-label" variant="outlined" fullWidth value={goalData.exercise} label="Exercise" onChange={(e) => setGoalData({ ...goalData, exercise: e.target.value })}>
                        <MenuItem value="Bench Press">Bench Press</MenuItem>
                        <MenuItem value="Deadlift">Deadlift</MenuItem>
                        <MenuItem value="Squat">Squat</MenuItem>
                    </Select>
                </FormControl>
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