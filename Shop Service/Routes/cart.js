import express from 'express';
const router = express.Router();

import  {getCartItem, getCartItems, createCartItem, updateCartItem, deleteProduct } from '../controllers/cartController.js';

router.get('/', getCartItems);
router.get('/:id', getCartItem);
router.post('/', createCartItem);
router.patch('/:id', updateCartItem);
router.delete('/:id', deleteProduct);

export default router;