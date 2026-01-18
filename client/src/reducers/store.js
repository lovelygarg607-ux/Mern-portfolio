// store.js
import { configureStore } from "@reduxjs/toolkit"
import { Profilereducer } from "./Reducers.js";



const store = configureStore({
     reducer:Profilereducer
});

export default store;
