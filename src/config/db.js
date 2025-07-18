import pkg from 'pg';
const { Pool} = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user : process.env.USER,
    host : process.env.HOST,
    database : process.env.DATABASE,
    password : process.env.PASSWORD,
    port : process.env.DBPORT,
});     

pool.on('connect',()=>{
    console.log("Connection pool established")
})

export default pool;