// backend/routes/contactRoutes.js
import express from "express";
import { submitContactForm,getAllContacts } from "../Controllers/contactcontrollers.js";

const router = express.Router();
router.post("/add", submitContactForm);
router.get("/get", getAllContacts);

export default router;



