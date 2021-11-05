import React from "react";
import { Stack, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import LiftForm from "./LiftForm/LiftForm";
import LiftTable from "./LiftTable/LiftTable";
import useStyles from './styles';

const Lifts = ({ currentId, setCurrentId }) => {
    const lifts = useSelector((state) => state.lifts);
    const classes = useStyles();
    const liftTypes = ["Bench Press", "Deadlift", "Squat", "Incline Bench"]

    return (
        <Stack spacing={2} container alignItems="stretch">
            <LiftForm setCurrentId={setCurrentId} currentId={currentId} />
            {liftTypes.map((name) => (
                <LiftTable lifts={lifts} liftName={name}/>
            ))}
        </Stack>
    );
};

export default Lifts;