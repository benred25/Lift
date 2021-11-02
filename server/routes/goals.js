import express from "express";

import {getGoals, createGoal, completeGoal, deleteGoal} from '../controllers/goals.js';

const router = express.Router();

router.get('/', getGoals);
router.post('/', createGoal);
router.patch('/:id/completeGoal', completeGoal);
router.delete('/:id', deleteGoal);

export default router;