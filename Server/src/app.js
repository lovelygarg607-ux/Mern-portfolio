import express from "express"
import cors from "cors"
import projectrouter from "./route/projectroute.js";
import contactrouter from "./route/contactroute.js";

import profilerouter from "./route/Profileroutes.js";
import adminrouter from "./route/adminroute.js";
import skillrouter from "./route/skillroute.js";




const app = express();

 app.use(cors({
    origin: "http://localhost:5000",
 }))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use("/portfolio/project",projectrouter)
app.use("/portfolio/admin",adminrouter)
app.use("/portfolio/profile",profilerouter)
app.use("/portfolio/skill",skillrouter)
app.use("/portfolio/contact",contactrouter)



export { app }