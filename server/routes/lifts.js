import express from 'express';

import { getLifts } from '../controllers/lifts.js';

const router = express.Router();

router.get('/', getLifts);

export default router;