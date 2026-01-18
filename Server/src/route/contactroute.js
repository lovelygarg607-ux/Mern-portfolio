import express from "express"
import { contactcontroller, getcontactlist } from "../controllers/contactcontroller.js";



const contactrouter=express.Router()

contactrouter.post("/message",
 contactcontroller)
  contactrouter.get("/getcontactlist"
,getcontactlist)
 

export default contactrouter;