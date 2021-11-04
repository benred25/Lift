import React from "react";
import { Stack, TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";

import LiftForm from "./LiftForm/LiftForm";
import useStyles from './styles';

const Lifts = ({ currentId, setCurrentId }) => {
    const lifts = useSelector((state) => state.lifts);
    const classes = useStyles();
    const liftTypes = ["Bench Press", "Deadlift", "Squat", "Incline Bench"]

    return (
        <Stack spacing={2} container alignItems="stretch">
            <LiftForm setCurrentId={setCurrentId} currentId={currentId} />
            <TableContainer>
                {liftTypes.map((name) => (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{name}</TableCell>
                                <TableCell>Sets</TableCell>
                                <TableCell>Reps</TableCell>
                                <TableCell>Weight (lbs)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lifts.filter(lift => lift.exercise === name).map((lift) => (
                                <TableRow>
                                    <TableCell>{lift.createdAt.slice(0,10)}</TableCell>
                                    <TableCell>{lift.sets}</TableCell>
                                    <TableCell>{lift.reps}</TableCell>
                                    <TableCell>{lift.weight}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ))}
            </TableContainer>
        </Stack>
    );
};

export default Lifts;