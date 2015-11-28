import { createStore } from "redux"
import CoreReducer from "./reducers/CoreReducer"

const store = createStore(CoreReducer);
store.dispatch({type: "INIT"});

export default store;
