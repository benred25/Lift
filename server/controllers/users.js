import express from "express";
import mongoose from "mongoose";

import User from '../models/user.js';

const router = express.Router();

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addPoints = async (req, res) => {
    const { id } = req.params;
    const points = req.body.points;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);
    const user = await User.findById(id);
    const updatedUser = await User.findByIdAndUpdate(id, { points: user.points + points }, { new: true });
    res.json(updatedUser);
}

export default router;