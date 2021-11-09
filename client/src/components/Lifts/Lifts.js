import React, {useState} from "react";
import { Stack, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import LiftForm from "./LiftForm/LiftForm";
import LiftTable from "./LiftTable/LiftTable";
import LiftGraph from "./LiftGraph/LiftGraph";
import useStyles from './styles';

const Lifts = ({ currentId, setCurrentId }) => {
    const lifts = useSelector((state) => state.lifts);
    const classes = useStyles();
    const liftTypes = ["Bench Press", "Deadlift", "Squat", "Incline Bench"]
    const [currentLiftType, setCurrentLiftType] = useState('Bench Press');

    return (
        <Stack spacing={2} container alignItems="stretch">
            <LiftForm setCurrentId={setCurrentId} currentId={currentId} />
            {liftTypes.map((name) => (
                <LiftTable lifts={lifts} liftName={name} setCurrentLiftType={setCurrentLiftType}/>
            ))}
            <LiftGraph lifts={lifts} liftName={currentLiftType}/>
        </Stack>
    );
};

export default Lifts;