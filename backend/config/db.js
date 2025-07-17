
import { neon } from "@neondatabase/serverless";

import "dotenv/config"

//this creates a sql conection using the  databse url 
export const sql = neon(process.env.DATABASE_URL);


