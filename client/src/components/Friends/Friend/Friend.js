import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";


import makeStyles from './styles';

const Friend = ({ friend }) => {
    const classes = makeStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography sx={{ fontSize: 24}} gutterBottom>{friend.firstName} {friend.lastName}</Typography>
                <Typography sx={{ fontSize: 14, color: '#2F2E2F'}} gutterBottom>@{friend.username}</Typography>
                <Typography sx={{ fontSize: 14, color: '#2F2E2F'}} gutterBottom>Points: {friend.points}</Typography>
                {friend.status ?
                    <Typography sx={{ fontSize: 14, color: '#2F2E2F'}} gutterBottom>{friend.firstName} already lifted today</Typography> :
                    <Typography sx={{ fontSize: 14, color: '#2F2E2F'}} gutterBottom>{friend.firstName} hasn't lifted today. You're ahead!</Typography>}
                    </CardContent>
        </Card>
    )
}

export default Friend;