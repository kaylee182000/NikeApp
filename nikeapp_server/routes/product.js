import express from "express";
import { getProduct, getProductDetail } from "../controllers/product.js";

const router = express.Router();

//get product
router.get("/product", getProduct);
//get product detail
router.get("/product/:productId", getProductDetail);

export default router;
