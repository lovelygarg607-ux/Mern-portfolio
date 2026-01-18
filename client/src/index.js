import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles/form.css";
import "./index.css"



import {

  RouterProvider,

} from "react-router-dom";


import { Provider } from "react-redux"

import router from "./router.js"
import store from "./reducers/store.js"







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);


