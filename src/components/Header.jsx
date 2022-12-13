import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import flag from "../assets/Flag.jpg";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 50px;
    max-width: 100vw;
    border-bottom: 1px solid gray;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 90px;
`;

const Flag = styled.img`
    height: 16px;
    width: 20px;
    padding-right: 5px;
`;

const Txt = styled.div`
    font-weight: 500;
    color: #008753;
`;

const Links = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Page = styled.div`
    padding-right: 60px;
    color: #008753;
    font-weight: 500;
    cursor: pointer;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 500;
    color: white;
    background-color: #008753;
    height: 40px;
    width: 100%;
`;

const Header = () => {
  return (
    <div>
        <Container>
            <Logo>
                <Flag src={flag}></Flag>
                <Link  style={{ textDecoration: "none" }} to={`/`}>
                    <Txt>asusu</Txt>
                </Link> 
            </Logo>
            <Links>
                <Page>Kits</Page>
                <Page>Translator</Page>
                <Page>Docs</Page>
                <Page>Blog</Page>
            </Links>
            <Buttons>
                <Button>Contact Us</Button>
            </Buttons>
        </Container>
    </div>
  )
}

export default Header;