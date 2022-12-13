import React, { useMemo } from 'react';
import styled from 'styled-components';

import testaudio from "../assets/audio.mp3";
import icon from "../assets/icon.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 250px;
    border: 2px solid #008753;
    border-radius: 8px;
    margin: 0px 5px;
    margin-bottom: 10px;
    color: #008753;
    padding: 0px 5px;
`;

const Top = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;

const Text = styled.div`
    font-size: 30px;
    font-weight: 400;
`;

const Bottom = styled.div`
    flex: 1;
`;

const Word = ({ word }) => {
  console.log(word);
  let audio = new Audio(word.pronunciation);

  const start = () => {
    audio.play();
  };
  return (
    <Container>
        <Top>
            <img src={icon} alt="" height={"60px"} width={"60px"} onClick={start} />
            <Text>{word.word}</Text>
        </Top>
        <Bottom>{word?.examples[0]?.igbo}</Bottom>
    </Container>
  )
}

export default Word;