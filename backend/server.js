

import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 5001;

async function  initDB() {
    try{
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`
    }catch(error){

    }
}

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log("server is up and running on PORT",PORT);
})
