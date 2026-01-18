import express from "express"

import { addskillcontroller,  getskillslist } from "../controllers/skillcontroller.js";
import {upload} from "../middleware/multer.js"




const skillrouter=express.Router()

skillrouter.post("/addskill", upload.fields ([{name:"iconimage",maxCount:1}])
 ,addskillcontroller)
  skillrouter.get("/getskillslist"
 ,getskillslist)
  

export default skillrouter;
