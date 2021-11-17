import express from 'express';

import { getUsers, addPoints } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.patch('/:id/addPoints', addPoints);

export default router;