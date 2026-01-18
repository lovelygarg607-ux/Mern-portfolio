import express from "express"
import {addProfileController} from "../controllers/Profilecontroller.js"
import { upload } from "../middleware/multer.js"

const profilerouter=express.Router()

profilerouter.post("/addprofile",upload.fields([{name:"profileImage",maxCount:1}]),addProfileController);






export default profilerouter;