import express from "express";
import { CreateMovie, DelateMovie, GetAllMovie, UpdateMovie } from "../controllers/movies.controller.js";

const router = express.Router();

// C - for Creatinging
router.post("/", CreateMovie);

// R - for Reading
router.get("/", GetAllMovie);

// U - for Updating
router.put("/:id",UpdateMovie);

// D - for Deleating
router.delete("/:id", DelateMovie);

export default router;
