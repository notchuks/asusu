import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Words } from ".";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 50px);
    max-width: 100vw;
`;
const Intro = styled.div`
    padding-top: 80px;
    padding-bottom: 20px;
`;
const Title = styled.div`
    font-size: 50px;
    font-weight: 600;
    color: #008753;
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
`;
const SearchBar = styled.input`
    height: 40px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 5px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
    color: white;
    background-color: #008753;
    height: 40px;
    width: 80px;
`;

const Main = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  console.log(word);

  const handlePress = (e) => {
    if (e.key === "Enter") {
      fetchWord();
    }
  };

  const fetchWord = async () => {
    const res = await axios.get(`https://igboapi.com/api/v1/words?keyword=${word}&dialects=true&examples=true`, {
        headers: {
            "X-API-Key": "518b4b69-0975-42f4-8f54-3a9d7b7c7dbb",
        }
    });
    console.log(res.data);
    setData(res.data);
  }
  return (
    <Container>
        <Intro>
            <Title>English To Igbo Translator.</Title>
        </Intro>
        <SearchContainer>
            <SearchBar placeholder="Enter word" onChange={(e) => setWord(e.target.value)} onKeyDown={handlePress} ></SearchBar>
            <Button onClick={fetchWord} >Search</Button>
        </SearchContainer>
        {data.length !== 0 && (
            <Words words={data} />
        )}
    </Container>
  )
}

export default Main;