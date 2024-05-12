import express from "express";

const app = express();
const PORT=5000


app.get('/',(req,res)=>{
    res.json({mesage:"hello welcome back"})
})

app.listen(PORT,()=>{
    console.log(` app listening on port ${PORT}`);
})