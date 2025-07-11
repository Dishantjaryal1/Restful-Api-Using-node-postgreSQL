import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js";
import validateUser from "../middleware/inputValidator.js";

const router = express.Router();


router.get("/user",getAllUsers);
router.get("/user/:id",getUserById);
router.put("/user/:id",validateUser,updateUser);
router.post("/user",validateUser,createUser);
router.delete("/user/:id",deleteUser);


export default router;
