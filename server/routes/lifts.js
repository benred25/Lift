import express from 'express';

import { getLifts, createLift } from '../controllers/lifts.js';

const router = express.Router();

router.get('/', getLifts);
router.post('/', createLift);

export default router;