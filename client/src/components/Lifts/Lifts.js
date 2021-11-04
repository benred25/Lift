import React from "react";
import { Stack, TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";

import LiftForm from "./LiftForm/LiftForm";
import useStyles from './styles';

const Lifts = ({ currentId, setCurrentId }) => {
    const lifts = useSelector((state) => state.lifts);
    const classes = useStyles();
    console.log("lifts");
    console.log(lifts);
    return (
        <Stack spacing={2} container alignItems="stretch">
            <LiftForm setCurrentId={setCurrentId} currentId={currentId} />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bench Press</TableCell>
                            <TableCell>Sets</TableCell>
                            <TableCell>Reps</TableCell>
                            <TableCell>Weight (lbs)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lifts.map((lift) => (
                            <TableRow>
                                <TableCell>{lift.createdAt}</TableCell>
                                <TableCell>{lift.sets}</TableCell>
                                <TableCell>{lift.reps}</TableCell>
                                <TableCell>{lift.weight}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default Lifts;