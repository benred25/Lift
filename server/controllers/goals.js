import express from 'express';
import mongoose from "mongoose";

import Goal from '../models/goal.js';

const router = express.Router();

export const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createGoal = async (req, res) => {
    const { exercise, reps, sets, weight, completed, createdAt } = req.body;
    const newGoal = new Goal({ exercise, reps, sets, weight, completed, createdAt });

    try {
        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const completeGoal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No goal with id: ${id}`);
    const updatedGoal = await Goal.findByIdAndUpdate(id, { completed: true }, {new: true });
    res.json(updatedGoal);
}

export const deleteGoal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No goal with id: ${id}`);
    await Goal.findByIdAndRemove(id);
    res.json({ message: "Goal deleted successfully." });
};




export default router;