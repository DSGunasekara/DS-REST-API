import express from 'express';
const router = express.Router();

import  { createDelivery } from '../controllers/deliveryController.js';

router.post('/', createDelivery);

export default router;