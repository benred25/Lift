import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Checkbox } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import {completeGoal} from "../../../actions/goals";

const Goal = ({ goal }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2">{moment(goal.createdAt).fromNow()}</Typography>
                <Typography variant="h5">{goal.exercise}</Typography>
                <Button style={{ color: 'white' }} size="small" onClick={() => {}}><MoreHoriz fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">Sets: {goal.sets}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Reps: {goal.reps}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Weight: {goal.weight}lbs</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" />&nbsp;Delete</Button>
                <Typography variant="body2" color="primary" component="h2">Complete<Checkbox onClick={() => dispatch(completeGoal(goal._id))}/></Typography>
            </CardActions>
        </Card>
    )
}

export default Goal;