const express = require("express");
const app = express();
const port = 3300;

app.listen(port, ()=>{
    console.log(`listening at port: ${port}`)
});

app.get("/", (req, res)=>{
    res.send("Benvenuti sul mio blog");
})