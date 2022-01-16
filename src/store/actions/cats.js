export const GET_CATS_CATEGORIES_REQUEST="GET_CATS_CATEGORIES_REQUEST";
export const GET_CATS_CATEGORIES_SUCCESS="GET_CATS_CATEGORIES_SUCCESS";
export const GET_CATS_CATEGORIES_FAIL="GET_CATS_CATEGORIES_FAIL";

export function getCatsCategoriesRequest(){
    return{
        type:GET_CATS_CATEGORIES_REQUEST,
        payload:{

        }
    }
}
