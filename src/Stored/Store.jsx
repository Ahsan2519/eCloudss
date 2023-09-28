import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducers/ResponsiveData";

const Store = createStore(rootReducer);

export default Store