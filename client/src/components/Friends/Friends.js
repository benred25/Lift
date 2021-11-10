import React from "react";
import {Card, CardContent, Stack, Typography} from "@mui/material";

import makeStyles from './styles';

import Friend from "./Friend/Friend";

const Friends = () => {
    const classes = makeStyles();
    const friends = [
        {
            firstName: 'Jim',
            lastName: 'Halpert',
            username: 'jimmyh',
            points: 18000,
            status: true,
        },
        {
            firstName: 'Dwight',
            lastName: 'Shrute',
            username: 'beetlover99',
            points: 12000,
            status: false,
        },
        {
            firstName: 'Toby',
            lastName: 'Flenderson',
            username: 'tobinator',
            points: 0,
            status: false,
        },
        {
            firstName: 'Michael',
            lastName: 'Scott',
            username: 'ihatetoby25',
            points: 21000,
            status: true,
        },
    ]

    return (
        <Stack spacing={2} container alignItems="stretch">
            <Card>
                <CardContent className={classes.cardContent}>
                    <Typography align="center" fontSize={50}>Friends</Typography>
                </CardContent>
            </Card>
            {friends.map((friend) => (
                <Friend friend={friend} />
            ))}
        </Stack>
    )
}

export default Friends;
