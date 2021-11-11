import React from "react";
import {Card, CardContent, Stack, Typography} from "@mui/material";

import makeStyles from './styles';

import Friend from "./Friend/Friend";
import {useSelector} from "react-redux";

const Friends = () => {
    const users = useSelector((state) => state.users);
    const classes = makeStyles();


    return (
        <Stack spacing={2} container alignItems="stretch">
            <Card>
                <CardContent className={classes.cardContent}>
                    <Typography align="center" fontSize={50}>Friends</Typography>
                </CardContent>
            </Card>
            {users.filter((user) => !user.current).map((friend) => (
                <Friend friend={friend} />
            ))}
        </Stack>
    )
}

export default Friends;
