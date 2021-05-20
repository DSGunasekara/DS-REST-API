import express from 'express';
const router = express.Router();

import verify from '../Middleware/verify.js'
import  {getCartItem, getUserItems, getCartItems, createCartItem, updateCartItem, deleteProduct } from '../controllers/cartController.js';

router.get('/', verify, getCartItems);
router.get('/:id', verify, getCartItem);
router.get('/user/:id', verify, getUserItems);
router.post('/', verify, createCartItem);
router.patch('/:id', verify, updateCartItem);
router.delete('/:id', verify, deleteProduct);

export default router;