import express from 'express';
import verify from "../Middleware/verify.js";

const router = express.Router();

import  { login } from '../controllers/authController.js';

// router.get('/', verify, checkUser);
router.post('/', login);

export default router;