import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Checkbox } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import {deleteLift} from "../../../actions/lifts";

const Lift = ({ lift, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="body2">{moment(lift.createdAt).fromNow()}</Typography>
                <Typography variant="h5">{lift.exercise}</Typography>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(lift._id)}><MoreHoriz fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">Sets: {lift.sets}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Reps: {lift.reps}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">Weight: {lift.weight}lbs</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" onClick={() => dispatch(deleteGoal(lift._id))}><DeleteIcon fontSize="small" />&nbsp;Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Lift;