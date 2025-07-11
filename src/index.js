import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandling from "./middleware/errorHandler.js"
import createUserTable from "./data/createUserTable.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api",userRoutes);

// Error handling
app.use(errorHandling)

// create table before starting server
createUserTable();


// testing postgres connection
app.get("/",async (req,res)=>{
    const result=await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
})



// Server setup
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

