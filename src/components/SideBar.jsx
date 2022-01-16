import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getCatsCategoriesRequest} from "../store/actions/cats";
import {useNavigate} from "react-router-dom";
import {darkThemeColor, lightThemeColor} from "../utils"
import {getGalleryByCategoryRequest} from "../store/actions/gallery";
import {FaCat} from "react-icons/fa";

const SideBar = () => {
    const dispatch = useDispatch()

    const {categories, categoryStatus} = useSelector(state => state.cats)
    const navigateTo = useNavigate()
    const handleClick = (catId) => {
        navigateTo(`/category/${catId}`)
        dispatch(getGalleryByCategoryRequest(10, 1, catId))
    }
    useEffect(() => {
        dispatch(getCatsCategoriesRequest())
    }, [])
    return (
        <SideBarContainer>
            <Logo>
                <FaCat/>
                <span>CatApp</span>
            </Logo>
            <CategoriesContainer>
                <CategoriesList>
                    <CategoriesListTile>
                        Categories
                    </CategoriesListTile>
                    {categories.map(cat => (
                        <CategoryItem key={cat.id} onClick={() => handleClick(cat.id)}>
                            {cat.name}
                        </CategoryItem>
                    ))}
                </CategoriesList>
            </CategoriesContainer>
        </SideBarContainer>
    );
};
const CategoriesListTile = styled.h3`
color:white
`

const CategoriesContainer = styled.div`
display:flex;
flex-direction:column;
padding:20px;
`
const CategoriesList = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
`
const CategoryItem = styled.div`
text-decoration:none;
text-transform:capitalize;
padding:10px;
width: 100%;
text-align: center;
align-items: center;
font-size:1rem;
border-radius:20px;
background-color:${lightThemeColor};
margin-top:10px;
font-weight:500;
color: ${darkThemeColor};
cursor:pointer;
transition: all ease 0.8s;
&:hover{
box-shadow: 0 0 40px rgba(255,255,255,0.5);
}
`
const SideBarContainer = styled.div`
width:20vw;
height:100vh;
background-color:${darkThemeColor};
border-radius:20px;
position:fixed;
display: flex;
flex-direction: column;
align-items: center;
`
const Logo = styled.div`
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white;
width: 100px;
height: 100px;
margin-top:20px;
span{
font-size: 18px;
font-color:${lightThemeColor}
padding:10px;
}
`
export default SideBar;
