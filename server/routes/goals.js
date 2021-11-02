import express from "express";

import {getGoals, createGoal, completeGoal} from '../controllers/goals.js';

const router = express.Router();

router.get('/', getGoals);
router.post('/', createGoal);
router.patch('/:id/completeGoal', completeGoal);

export default router;