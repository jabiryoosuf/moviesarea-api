import express from "express";

const router = express.Router();

// C - for Creatinging
router.post("/", (req,res) => {
    res.send("create a movie")
});

// R - for Reading
router.get("/", (req,res) => {
    res.send("Reading a movie")
});

// U - for Updating
router.put("/:id", (req,res) => {
    res.send("update a movie")
});

// D - for Deleating
router.delete("/:id", (req,res) => {
    res.send("deleat a movie")
});


export default router;
