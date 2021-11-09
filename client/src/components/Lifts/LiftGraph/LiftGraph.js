import React, {useEffect} from "react";
import Recharts, { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, BarChart } from "recharts";
import useStyles from "./styles";


const LiftGraph = ({ lifts, liftName }) => {
    const classes = useStyles();
    lifts = lifts.filter(lift => lift.exercise === liftName);
    console.log(lifts);
    console.log(liftName);

    useEffect(() => {
        lifts = lifts.filter(lift => lift.exercise === liftName);
    }, [liftName])

    return (
        <div className={classes.graph}>
            <BarChart width={500} height={300} data={lifts} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="weight" fill="#8884d8" />
                <Bar dataKey="sets" fill="#FFFFFF" />
                <Bar dataKey="reps" fill="#2D2D2D" />
            </BarChart>
        </div>
    )
}

export default LiftGraph;