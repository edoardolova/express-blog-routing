const express = require("express");
const router = express.Router();

const fs = require("fs");
const posts = require("../data.js")

// index
router.get("/",(req, res) =>{
    // res.send("mostro tutti i post");
    // fs.readFile("./posts.json", "utf-8", (err, data)=>{
    //     if (err) {
    //         return res.status(500).json({error: "error in reading the file"});
    //     }
    //     let posts = JSON.parse(data);
    // })
    res.json(posts);
});

// show
router.get("/:id", (req, res) =>{
    const id = req.params.id;
    // res.send(`mostro il post con id: ${id}`);
    // fs.readFile("./posts.json", "utf-8", (err, data)=>{
    //     if (err) {
    //         return res.status(500).json({error: "error in reading the file"});
    //     }
    //     let posts = JSON.parse(data);
    //     post = posts.find(post => post.id === Number(id));
    //     if(post){
    //         return res.json(post);
    //     }
    //     else{
    //         return res.status(404).json({err: "post not found"});
    //     }
    // });
    let post = posts.find(post => post.id === Number(id));
    if(post){
        return res.json(post);
    }
    else{
        return res.status(404).json({err: "post not found"});
    }
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