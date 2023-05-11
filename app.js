import express from "express";

const app = express();
const port = 2000;

app.get("/",(req,res)=>{
    res.send("asldaadwwaddawawdsdl")
})
app.listen(port, ()=>{
    console.log(`Application running on port: ${port}`)
});