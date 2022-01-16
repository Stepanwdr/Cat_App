import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCatsCategoriesRequest} from "../store/actions/cats";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import Wrapper from "../components/Wrapper";
const Cats = () => {
    return (
        <Wrapper>
             <Container>
            <Gallery/>
             </Container>
        </Wrapper>
    );
};

const MainContent = styled.div`
width:100vw;
height:100vh;
background-color:#efefef;
`
const Container = styled.div`
width:100vw;
height:100vh;
padding: 20px;
background-color:#efefef;
`

export default Cats;