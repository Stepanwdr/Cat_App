import {all,fork} from "redux-saga/effects"
import cats from "./cats"
import gallery from "./gallery";
export default function* watchers(){
    yield all([
        cats,
        gallery
    ].map(fork))
}