import React from 'react';
import styled from 'styled-components';

import { Word } from ".";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100vw;
  margin-top: 30px;
`;

const Words = ({ words }) => {
  console.log(words);
  return (
    <Container>
        {words.map((word) => <Word word={word} key={word.id} />)}
    </Container>
  )
}

export default Words;