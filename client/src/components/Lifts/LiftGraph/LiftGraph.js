import React, {useEffect} from "react";
import Recharts, { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, BarChart, ResponsiveContainer } from "recharts";
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
        <div className={classes.overlay}>
            <div align="center">
                <h3>{liftName} Data</h3>
            </div>
            <div>
                    <BarChart width={800} height={300} data={lifts} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis tick={{fill: "rgba(0,0,0,0)"}}/>
                        <YAxis tick={{fill: "#000000"}} yAxisId="reps" orientation="right" dataKey="reps"/>
                        <YAxis tick={{fill: "#000000"}} yAxisId="weight" dataKey="weight" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="reps" dataKey="sets" fill="#8A0808" />
                        <Bar yAxisId="reps" dataKey="reps" fill="#088A08" />
                        <Bar yAxisId="weight" dataKey="weight" fill="#4B088A" />
                    </BarChart>
            </div>
        </div>
    )
}

export default LiftGraph;