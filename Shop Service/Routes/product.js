import express from 'express';
import upload from '../Middleware/imageUpload.js';

const router = express.Router();

import verify from '../Middleware/verify.js'
import  {getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', verify, upload.single('images'), createProduct);
router.patch('/:id', verify, updateProduct);
router.delete('/:id', verify, deleteProduct);

export default router;