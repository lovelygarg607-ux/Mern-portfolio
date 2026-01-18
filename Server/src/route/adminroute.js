import express from "express"
import { admincontroller } from "../controllers/admincontroller.js"





const adminrouter=express.Router()

adminrouter.post("/login",
 admincontroller)

export default adminrouter