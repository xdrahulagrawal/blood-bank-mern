import express from 'express'
import dotenv from 'dotenv'

const app=express();

dotenv.config()


app.listen(process.env.Port,()=>{
console.log('Port no 5000');
})