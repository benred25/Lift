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




export default router;