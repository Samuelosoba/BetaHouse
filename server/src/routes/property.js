import express from "express";
import {
  createProperty,
  getAllProperties,
  getPopularProperties,
  searchProperties,
} from "../controllers/property.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createProperty);
router.get("/", getAllProperties);
router.get("/search", searchProperties);
router.get("/popular", getPopularProperties); // use this for popular properties

export default router;
