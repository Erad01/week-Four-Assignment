//imports
import pg from "pg";
import dotenv from "dotenv";

//config dotenv
dotenv.config();

//store connection string
const dbConnectionString = process.env.DB_URL;

//set up the pool 
export const db = new pg.Pool({
    connectionString : dbConnectionString
})