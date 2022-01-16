import {takeLatest, call, put} from "redux-saga/effects";
import Api from "../../Api";
import { GET_CATS_GALLERY_BY_CATEGORY_FAIL, GET_CATS_GALLERY_BY_CATEGORY_REQUEST, GET_CATS_GALLERY_BY_CATEGORY_SUCCESS}
    from "../actions/gallery";

export default function* watcher() {
    yield takeLatest(GET_CATS_GALLERY_BY_CATEGORY_REQUEST, handleGetGalleryByCategoryRequest)
}

function*  handleGetGalleryByCategoryRequest(action) {
    try {
        const{limit, page,catId}=action.payload
        console.log(limit, page,catId,"pagData")
        const {data} = yield call(Api.getGalleryByCategory, limit, page,catId)
        console.log(data,"GalleryDataFirstReq")
        yield put({
            type: GET_CATS_GALLERY_BY_CATEGORY_SUCCESS,
            payload: {
                data
            }
        })
    } catch (e) {
        yield put({
            type:  GET_CATS_GALLERY_BY_CATEGORY_FAIL,
            message: e.message
        })
        console.log.warn(e)
    }

}