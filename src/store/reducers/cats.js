import {
    GET_CATS_CATEGORIES_FAIL,
    GET_CATS_CATEGORIES_REQUEST,
    GET_CATS_CATEGORIES_SUCCESS,
} from "../actions/cats";

const initialState={
categoryStatus:"",
    categories:[]
}

export default function reducer(state=initialState,action) {
    switch (action.type) {
        case GET_CATS_CATEGORIES_REQUEST: {
            return {
                ...state,
                categoryStatus:"request"
            }
        }
        case GET_CATS_CATEGORIES_SUCCESS: {
            const {data}=action.payload
            return {
                ...state,
                categoryStatus:"success",
                categories:data
            }
        }
        case GET_CATS_CATEGORIES_FAIL: {
            return {
               ...state,
                categoryStatus:"fail"
            }
        }


        default:
            return state

    }
}