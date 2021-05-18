import express from 'express';
import upload from '../Middleware/imageUpload.js';

const router = express.Router();

import  {getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', upload.single('images'), createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;