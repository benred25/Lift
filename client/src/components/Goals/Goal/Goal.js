import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Goal = ({ goal }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <Typography variant="h6">{goal.exercise}</Typography>
                <Typography variant="body2">{moment(goal.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{goal.sets}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{goal.reps}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{goal.weight}</Typography>
            </div>
        </Card>
    )
}

export default Goal;