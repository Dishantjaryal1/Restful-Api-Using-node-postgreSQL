import pool from "../config/db.js";

export const getAllUsersService = async ()=>
{
    const result= await pool.query("SELECT * FROM users");
    return result.rows;

};

export const getAllUsersByIdService = async (id)=>{
    const result = await pool.query("SELECT * FROM users where id=$1",[id]);
    return result.rows[0];
}

export const createUsersService = async (name,email)=>
{
    const res= await pool.query("INSERT INTO users(name,email) VALUES ($1,$2) RETURNING *",[name,email]);
    return res.rows[0];
}

export const updateUsersService = async (id,name,email)=>{
    const res=await pool.query("UPDATE users SET name=$1,email=$2 WHERE ID=$3 RETURNING *",[name,email,id])
    return res.rows[0];
}

export const deleteUsersService = async (id)=>{
    const res=await pool.query("DELETE FROM users where id=$1 RETURNING *",[id] );
    return res.rows[0];
}