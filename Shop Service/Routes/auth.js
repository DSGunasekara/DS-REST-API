import express from 'express';

const router = express.Router();

import  { login } from '../controllers/authController.js';

router.post('/', login);

export default router;