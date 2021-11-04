import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';
import {createLift} from '../../../actions/lifts';

const LiftForm = ({ currentId, setCurrentId }) => {
    const [liftData, setLiftData] = useState({ exercise: '', sets: '', reps: '', weight: '' });
    const lift = useSelector((state) => (currentId ? state.lifts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (lift) setLiftData(lift);
    }, [lift]);

    const clear = () => {
        setCurrentId(0);
        setLiftData({ exercise: '', sets: '', reps: '', weight: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createLift(liftData));
        clear();
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Log a Lift</Typography>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="exercise-label">Exercise</InputLabel>
                    <Select labelId="exercise-label" variant="outlined" fullWidth value={liftData.exercise} label="Exercise" onChange={(e) => setLiftData({ ...liftData, exercise: e.target.value })}>
                        <MenuItem value="Bench Press">Bench Press</MenuItem>
                        <MenuItem value="Deadlift">Deadlift</MenuItem>
                        <MenuItem value="Squat">Squat</MenuItem>
                        <MenuItem value="Incline Bench">Incline Bench</MenuItem>
                    </Select>
                </FormControl>
                <TextField name="sets" variant="outlined" label="Sets" fullWidth inputProps={{ type: 'number'}} value={liftData.sets} onChange={(e) => setLiftData({ ...liftData, sets: e.target.value })} />
                <TextField name="reps" variant="outlined" label="Reps" fullWidth inputProps={{ type: 'number'}} value={liftData.reps} onChange={(e) => setLiftData({ ...liftData, reps: e.target.value })} />
                <TextField name="weight" variant="outlined" label="Weight" fullWidth inputProps={{ type: 'number'}} value={liftData.weight} onChange={(e) => setLiftData({ ...liftData, weight: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default LiftForm;