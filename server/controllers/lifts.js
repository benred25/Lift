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







export default router;