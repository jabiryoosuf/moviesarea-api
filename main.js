import express from "express";
import moviesRoutes from "./routes/movies.js"

const app = express();
const PORT=5000


app.get('/',(req,res)=>{
    res.json({mesage:"hello welcome back"})
})

//CRUD functionality of movies

app.use("/movies",moviesRoutes)

app.listen(PORT,()=>{
    console.log(` app listening on port ${PORT}`);
})