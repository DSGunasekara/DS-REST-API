import express from 'express';
const router = express.Router();

import { addPayment } from "../controllers/cardController.js"

router.post('/', addPayment);

export default router;