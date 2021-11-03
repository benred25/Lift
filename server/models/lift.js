import mongoose from "mongoose";

const liftScheme = mongoose.Schema({
    exercise: String,
    reps: Number,
    sets: Number,
    weight: Number,
}, {timestamps: true});

var Lift = mongoose.model("Lift", liftScheme);

export default Lift;