import {
    GET_CATS_GALLERY_BY_CATEGORY_REQUEST,
    GET_CATS_GALLERY_BY_CATEGORY_SUCCESS,
    GET_CATS_GALLERY_BY_CATEGORY_FAIL,

} from "../actions/gallery";

const initialState={
    galleryStatus:"",
    gallery:[],
    limit:10,
    page:1
}
export default function reducer(state=initialState,action) {
    switch (action.type) {
        case GET_CATS_GALLERY_BY_CATEGORY_REQUEST: {
            return {
                ...state,
               galleryStatus:"request"
            }
        }
        case GET_CATS_GALLERY_BY_CATEGORY_SUCCESS: {
            const {data}=action.payload
            return {
                ...state,
                galleryStatus:"success",
                gallery:data
            }
        }
        case GET_CATS_GALLERY_BY_CATEGORY_FAIL: {
            return {
                ...state,
                galleryStatus:"fail"
            }
        }

        default:
            return state

    }
}