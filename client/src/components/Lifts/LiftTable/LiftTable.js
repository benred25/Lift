import React, {useEffect} from 'react';
import {Button} from "@material-ui/core";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import {deleteLift, getLifts} from "../../../actions/lifts";

const LiftTable = ({ lifts, liftName, setCurrentId, setCurrentLiftType }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <TableContainer>
            <Table>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>{liftName}</TableCell>
                        <TableCell>Sets</TableCell>
                        <TableCell>Reps</TableCell>
                        <TableCell>Weight (lbs)</TableCell>
                        <TableCell><Button variant="contained" color="primary" onClick={() => setCurrentLiftType(liftName)}>Graph</Button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {lifts.filter(lift => lift.exercise === liftName).map((lift) => (
                        <TableRow>
                            <TableCell>{lift.createdAt.slice(0,10)}</TableCell>
                            <TableCell>{lift.sets}</TableCell>
                            <TableCell>{lift.reps}</TableCell>
                            <TableCell>{lift.weight}</TableCell>
                            <TableCell><Button variant="contained" color="secondary" size="small" onClick={() => dispatch(deleteLift(lift._id))}><DeleteIcon fontSize="small"/>&nbsp;Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LiftTable;