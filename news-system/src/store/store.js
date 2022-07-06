import {createStore,combineReducers} from "redux";
import { collapsedReducer } from "./reducers/collapsed";
const reducer = combineReducers({
  collapsedReducer
})
const store = createStore(reducer)

export default store
