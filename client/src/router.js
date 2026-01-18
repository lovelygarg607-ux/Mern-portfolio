
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

} from "react-router-dom";

import App from "./App";
import Protectedroute from "./Components/Protectedroute.jsx"

import Login from "./Components/Login.jsx";



import Home from "./Components/Home.jsx"

import Dashboard from "./Components/Dashboard.jsx";

import Addprojectform from "./Components/Projectaddform.jsx"
import Addskillform from "./Components/Skilladdform.jsx"
import Card from "./Components/Card.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="/" element={<Protectedroute />}>


          <Route path="/addproject" element={<Addprojectform />} />
          <Route path="/addskill" element={<Addskillform />} />


          <Route path="/portfolio" element={<Home />} />
      
          <Route path="/contactlist" element={<Card />} />
            <Route path="/dashboard" element={<Dashboard />} />

        </Route>








      </Route>

      <Route path="/login" element={<Login />} />
    


    </Route>




  )
);

export default router;