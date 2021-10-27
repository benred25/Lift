import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    exercise: String,
    reps: Number,
    sets: Number,
    completed: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Goal = mongoose.model('Goal', goalSchema);

export default Goal;