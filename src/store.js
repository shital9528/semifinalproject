// Store manages data and reducers.

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
    reducer:{
        Cart:cartReducer
    }
});

export default store;