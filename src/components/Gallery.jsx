import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import _ from "lodash"
import {darkThemeColor, lightThemeColor} from "../utils"
import {getGalleryByCategoryRequest} from "../store/actions/gallery";

const Gallery = () => {
    const id = 1
    const {gallery, galleryStatus} = useSelector(state => state.gallery)
    const dispatch = useDispatch()
    const [page, setPage] = useState()
    const [limit, setLimit] = useState(10)
    let {catId}=useParams()
    const handleClick = async () => {
        await setLimit(limit + 10)
        dispatch(getGalleryByCategoryRequest(limit, page, catId))
    }

    if (galleryStatus === "request") {
        return <PreLoader>
            PLease Waiting . . .
        </PreLoader>
    }
    return (
        <GalleryContainer>
            {gallery.map(img => (<Image key={img.id} src={img.url}/>))
            }
            <GalleryControl>
                <Button onClick={handleClick}>{gallery.length ? "Load More" : "Load Gallery"}</Button>
            </GalleryControl>
        </GalleryContainer>
    );
};

//-----------Gallery---------
const GalleryContainer = styled.div`
display:flex;
flex-wrap:wrap;

`
const GalleryControl = styled.div`
display:flex;
justify-content:center;
width:100%;
`
const Image = styled.img`
object-fit: cover;
width:220px;
min-height: 300px;
padding:1rem;
border-radius: 40px;
`
const Button = styled.button`
background-color:${lightThemeColor};
border-radius:20px;
border:none;
color:${darkThemeColor};
padding: 20px;
cursor:pointer;
`





const PreLoader = styled.div`
display: flex;
padding: 10px;
justify-content: center;
font-size: 18px;
color:${darkThemeColor};
background-color:${lightThemeColor};
border-radius: 20px;
`
export default Gallery;