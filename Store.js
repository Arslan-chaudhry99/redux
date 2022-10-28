import { createStore } from "redux"
import rooteReducer from "./Reducer/index";
const store = createStore(rooteReducer)
export default store;