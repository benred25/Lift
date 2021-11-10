import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    points: Number,
    status: Boolean,
    current: Boolean,
}, {timestamps: true});

var User = mongoose.model("Lift", userSchema);

export default User;