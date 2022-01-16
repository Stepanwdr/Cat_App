/*
import React from 'react';
import styled from "styled-components";
import {darkThemeColor, lightThemeColor} from "../utils";
import {useSelector} from "react-redux";

const Pagination = () => {
    const {gallery, galleryStatus} = useSelector(state => state.gallery)

    if (!gallery.length < 10) {
        return (null)
    }
    return (
        <GalleryPagination>
            {_.range(1, gallery.length / page)
                .map((page) => (
                        <Page onClick={() => handlePageChange(page)}
                              currentPage={currentPage} key={page}>
                            {page}
                        </Page>
                    )
                )}
        </GalleryPagination>
    )
}
const GalleryPagination = styled.div`
display: flex;
background-color:${lightThemeColor};
border-radius: 20px;
padding: 5px;
width:100%;
align-items: center;

`
const Page = styled.div`
border-radius: 50%;
background-color: ${({currentPage}) => currentPage ? "White" : {darkThemeColor}};
font-weight: 500;
color:${({currentPage}) => currentPage ? darkThemeColor : {lightThemeColor}};;
display: flex;
min-width:40px;
height:40px;
align-items: center;
justify-content: center;
cursor:pointer;

`

export default Pagination;*/
