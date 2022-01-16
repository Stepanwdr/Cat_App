import {combineReducers} from "redux";
import cats from "./cats"
import gallery from "./gallery";

export default combineReducers({
    cats,
    gallery
})