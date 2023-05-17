import express from "express";
import dotenv from "dotenv"
import comn from "./db.js";
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"

dotenv.config(); //.env içeriğine bu şekilde ulaşıyoruz

//connection to the db
comn()

const app = express(); 
const port = process.env.port;

//ejs template engine
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json()); //req.body de gönderdiğimiz json formatındaki verilerin okunması için
app.use(express.urlencoded({extended: true}));//form body içeriğinin parse edilebilmesi için lazım

app.use("/",pageRoute)
app.use("/photos",photoRoute)
app.use("/users",userRoute)

/* 
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})  alt shift a*/
app.listen(port, ()=>{
    console.log(`Application running on port: ${port}`)
});