import express from "express"
import { addprojectcontroller, getprojectlist } from "../controllers/projectcontroller.js"
import {upload} from "../middleware/multer.js"


const projectrouter=express.Router()

projectrouter.post("/addproject", upload.fields ([{name:"projectimage",maxCount:1}])
 ,addprojectcontroller)
 projectrouter.get("/getprojectlist"
,getprojectlist)
 


export default projectrouter;

