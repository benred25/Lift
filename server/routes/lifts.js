import express from 'express';

import { getLifts, createLift, deleteLift } from '../controllers/lifts.js';

const router = express.Router();

router.get('/', getLifts);
router.post('/', createLift);
router.delete('/:id', deleteLift);

export default router;