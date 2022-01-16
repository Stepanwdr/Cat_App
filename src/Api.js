import axios from "axios";

const api=axios.create({
    baseURL:"https://api.thecatapi.com/v1",
    headers:{
        ContentType:"application/json, text/html"
    }
})
export default class Api{
    static getCatsCategories(){
        return api.get(`/categories/`)
    }
    static getGalleryByCategory(limit=20,page=20,catId=1){
        return api.get(`/images/search?limit=${limit}&page=${page}&category_ids=${catId}`)
    }
}