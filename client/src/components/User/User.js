import React, {useState} from "react";
import { useSelector } from "react-redux";
import {Card, CardContent, Paper, Typography} from "@mui/material";

import useStyles from './styles';

const User = () => {
    const user = useSelector((state) => state.users).filter((user) => user.current)[0];
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography sx={{ fontSize: 25}} gutterBottom>{user.firstName} {user.lastName}</Typography>
                <Typography sx={{ fontSize: 15, color: '#2F2E2F'}} gutterBottom>@{user.username}</Typography>
                <Typography sx={{ fontSize: 50, color: '#2F2E2F'}} gutterBottom>{user.points}</Typography>
            </CardContent>
        </Card>
    )
}

export default User;