import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    exercise: String,
    reps: Number,
    sets: Number,
    weight: Number,
    completed: {
        type: Boolean,
        default: false,
    },
    },
    { timestamps: true }
);

var Goal = mongoose.model('Goal', goalSchema);

export default Goal;