import express from 'express';
const router = express.Router();

import verify from '../Middleware/verify.js'
import  {getOrder, getOrders, createOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

router.get('/', verify, getOrders);
router.get('/:id', getOrder);
router.post('/', verify, createOrder);
router.patch('/:id', verify, updateOrder);
router.delete('/:id', verify, deleteOrder);

export default router;