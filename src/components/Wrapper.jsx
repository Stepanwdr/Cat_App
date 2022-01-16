import React from 'react';
import SideBar from "./SideBar";
import styled from "styled-components";

const Wrapper = ({children}) => {
    return (
        <StyledWrapper>
            <LeftCol>
                <SideBar/>
            </LeftCol>
            <RightCol>
                {children}
            </RightCol>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
width:100vw;
height:100vh;
background-color:#efefef;
display: flex;

overflow-x: hidden;
`
const LeftCol = styled.div`
width:20vw;
height:100vh;
background-color:#efefef;
display: flex;
`
const RightCol = styled.div`
width:80vw;
height:100vh;
overflow-y: auto;
background-color:#efefef;
display: flex;
flex-wrap:wrap;
`
export default Wrapper;