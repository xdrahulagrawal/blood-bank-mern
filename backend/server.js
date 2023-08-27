import express from 'express'
import dotenv from 'dotenv'
import ConnectDb from './config/connection.js';


//Dotenv
dotenv.config();

ConnectDb();
//rest object

const app = express();

const port = process.env.PORT

app.listen(port,()=>{
console.log('Port no 5000');
})