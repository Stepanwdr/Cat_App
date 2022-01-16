import React, {useEffect} from 'react';
import {BrowserRouter, Route,Routes,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGalleryByCategoryRequest} from "./store/actions/gallery";
import {getCatsCategoriesRequest} from "./store/actions/cats";
import Cats from "./pages/Cats";
const App = () => {
    const dispatch = useDispatch()
    const {categories,categoryStatus} = useSelector(state => state.cats)
    console.log(categories, 555)
    useEffect(() => {
        dispatch(getCatsCategoriesRequest())
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"}  element={<Cats/>}/>
                <Route path={`/category/:catId`}  element={<Cats/>}/>
            </Routes>
        </BrowserRouter>
    )
        ;
};

export default App;