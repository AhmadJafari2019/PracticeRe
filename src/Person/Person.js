import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  padding: 16px;
  background-color: #eee;
  border: 1px solid black;
  margin: 10px auto;
  text-align: center;

  '@media(min-width: 500px )': {
    width: '450px';
  }
`;
const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
