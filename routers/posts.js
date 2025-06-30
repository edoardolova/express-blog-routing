const express = require("express");
const router = express.Router();

// index
router.get("/",(req, res) =>{
    res.send("mostro tutti i post")
});

// show
router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.send(`mostro il post con id: ${id}`);
});

// store
router.post("/", (req, res) =>{
    res.send("aggiungo un nuovo post");
});

// update
router.put("/:id", (req, res) =>{
    const id = req.params.id;
    res.send(`cambio interamente il post con id: ${id}`);
});

//modify
router.patch("/:id", (req, res) =>{
    const id = req.params.id;
    res.send(`cambio in parte il post con id: ${id}`);
});

// detroy
router.delete("/:id", (req, res) =>{
    const id = req.params.id;
    res.send(`cancello il post con id: ${id}`);
});

module.exports = router;