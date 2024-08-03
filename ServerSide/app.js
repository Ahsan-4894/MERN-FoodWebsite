import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors'

import connectDB from './config/dbconnect.js';
import items from './routes/itemsRoute.js'

const PORT = process.env.PORT;
const app = express();
connectDB(process.env.DATABASE_URL);
app.use(bodyParser.json());
app.use(cors());
app.use("/web", items);
app.get("/", (req, res)=>{
    res.send("DONE");
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});