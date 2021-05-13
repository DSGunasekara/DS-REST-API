import express from 'express';
const router = express.Router();

import  {getCartItem, getUserItems, getCartItems, createCartItem, updateCartItem, deleteProduct } from '../controllers/cartController.js';

router.get('/', getCartItems);
router.get('/:id', getCartItem);
router.get('/user/:id', getUserItems);
router.post('/', createCartItem);
router.patch('/:id', updateCartItem);
router.delete('/:id', deleteProduct);

export default router;