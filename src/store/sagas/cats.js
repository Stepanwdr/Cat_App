import {takeLatest, call, put} from "redux-saga/effects";
import Api from "../../Api";
import {GET_CATS_CATEGORIES_FAIL, GET_CATS_CATEGORIES_REQUEST, GET_CATS_CATEGORIES_SUCCESS} from "../actions/cats";

export default function* switcher() {
    yield takeLatest(GET_CATS_CATEGORIES_REQUEST, handleCatsCategoriesRequest)
}

function* handleCatsCategoriesRequest(action) {
    try {
        // const {id} = action.payload
        const {data} = yield call(Api.getCatsCategories)
        console.log(data)
       yield put({
            type: GET_CATS_CATEGORIES_SUCCESS,
            payload: {
            data
            }
        })
    } catch (e) {
        yield put({
            type: GET_CATS_CATEGORIES_FAIL,
            message: e.message
        })
        console.log.warn(e)
    }

}