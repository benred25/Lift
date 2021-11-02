import express from "express";

import {getGoals, createGoal, completeGoal, deleteGoal, updateGoal} from '../controllers/goals.js';

const router = express.Router();

router.get('/', getGoals);
router.post('/', createGoal);
router.patch('/:id/completeGoal', completeGoal);
router.delete('/:id', deleteGoal);
router.patch('/:id', updateGoal);

export default router;