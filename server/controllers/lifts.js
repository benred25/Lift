import express from 'express';
import mongoose from 'mongoose';

import Lift from '../models/lift.js';

const router = express.Router();

export const getLifts = async (req, res) => {
    try {
        const lifts = await Lift.find();
        res.status(200).json(lifts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createLift = async (req, res) => {
    const { exercise, reps, sets, weight } = req.body;
    const newLift = new Lift({ exercise, reps, sets, weight });

    try {
        await newLift.save();
        res.status(200).json(newLift);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteLift = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No lift with id: ${id}`);
    await Lift.findByIdAndRemove(id);
    res.json({ message: "Lift deleted successfully." });
};







export default router;