import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductController,
  getProductByCategory,
  getProductBySubcategory,
  getProductDetails,
  searchProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import validateProduct from "../middleware/productMiddleware.js";
import { checkAdmin } from "../middleware/admin.js";

const productRoute = Router();

productRoute.post(
  "/product",
  authMiddleware,
  validateProduct,
  checkAdmin,
  createProductController
);
productRoute.post("/product/all", getAllProductController);
productRoute.post("/product/by-category", getProductByCategory);
productRoute.post("/product/by-category&subcategory", getProductBySubcategory);
productRoute.get("/product/details/:id", getProductDetails);
productRoute.put(
  "/product-update",
  authMiddleware,
  checkAdmin,
  updateProductController
);
productRoute.delete(
  "/product-delete",
  authMiddleware,
  checkAdmin,
  deleteProductController
);
productRoute.post("/product-search", searchProductController);

export default productRoute;
