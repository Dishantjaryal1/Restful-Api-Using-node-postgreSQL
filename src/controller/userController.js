// Standardized response function

import { createUsersService, deleteUsersService, getAllUsersByIdService, updateUsersService } from "../models/userModel.js";

const handleResponse = (res,status,message,data=null) =>{
    res.status(status).json({
        status,
        message,
        data
    });
};

export const createUser= async(req,res,next) => {
    const {name,email} = req.body;
    try {
        const newUser = await createUsersService(name,email);
        handleResponse(res,201,"User created successfully!",newUser);
    } catch (err) {
        next(err);
    }
};


export const getAllUsers= async(req,res,next) => {
    try {
        const users = await getAllUsersByIdService();
        handleResponse(res,200,"User fetched successfully!",users);
    } catch (err) {
        next(err);
    }
};


export const getUserById= async(req,res,next) => {

    try {
        const users = await getAllUsersByIdService(req.params.id);
        if(!users) handleResponse(res,401,"User not found");
        handleResponse(res,200,"User fetched successfully!",users);
    } catch (err) {
        next(err);
    }
};



export const updateUser= async(req,res,next) => {
    const {email,name}= req.body;
    try {
        const updatedUser = await updateUsersService(req.params.id,name,email);

        handleResponse(res,200,"User updated successfully!",updatedUser);
    } catch (err) {
        next(err);
    }
};



export const deleteUser= async(req,res,next) => {
    try {
        const deletedUser = await deleteUsersService(req.params.id);
        if(!deletedUser) handleResponse(res,401,"User not found");
        handleResponse(res,200,"User deleted successfully!",deletedUser);
    } catch (err) {
        next(err);
    }
};



