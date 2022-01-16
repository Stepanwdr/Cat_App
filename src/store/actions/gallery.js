export const GET_CATS_GALLERY_BY_CATEGORY_REQUEST="GET_CATS_GALLERY_BY_CATEGORY_REQUEST";
export const GET_CATS_GALLERY_BY_CATEGORY_SUCCESS="GET_CATS_GALLERY_BY_CATEGORY_SUCCESS";
export const GET_CATS_GALLERY_BY_CATEGORY_FAIL="GET_CATS_GALLERY_BY_CATEGORY_FAIL";

export function getGalleryByCategoryRequest(limit,page,catId){
    return{
        type:GET_CATS_GALLERY_BY_CATEGORY_REQUEST,
        payload:{
            limit,
            page,
            catId
        }
    }
}