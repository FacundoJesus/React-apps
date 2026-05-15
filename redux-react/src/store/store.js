import { createStoreHook } from "react-redux";
import counterReducer from "./reducers/counterReducer";

const store = createStoreHook(counterReducer);

export default store;