//import { createStore } from "redux";
import rootReducers from "./reducer";
import { legacy_createStore as createStore } from "redux";
const store = createStore(rootReducers)

export default store;