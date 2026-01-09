// backend/routes/serviceRoutes.js
import express from "express";
import { submitServiceForm,getAllServices } from "../Controllers/ServiceController.js"; 

const router = express.Router();
router.post("/add", submitServiceForm);
router.get("/get", getAllServices);
export default router;



