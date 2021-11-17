import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Checkbox } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import {completeGoal, deleteGoal, getGoals} from "../../../actions/goals";

const Goal = ({ goal, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2">{moment(goal.createdAt).fromNow()}</Typography>
                <Typography variant="h5">{goal.exercise}</Typography>
                <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(goal._id)}><MoreHoriz fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">Sets: {goal.sets}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Reps: {goal.reps}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Weight: {goal.weight}lbs</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" onClick={() => dispatch(deleteGoal(goal._id))}><DeleteIcon fontSize="small" />&nbsp;Delete</Button>
                {!goal.completed ? <Button size="small" color="primary" onClick={() => dispatch(completeGoal(goal._id))}>Complete</Button> : <Button size="small" color="primary" disabled>Complete</Button>}
            </CardActions>
        </Card>
    )
}

export default Goal;