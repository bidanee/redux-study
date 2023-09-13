import React, { useState } from "react";
import { styled } from "styled-components";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const [inputValue, setInputValue] = useState(diff);
  const onChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(value);
    onSetDiff(value);
  };
  const isInputValid = !isNaN(inputValue) && inputValue > 0;
  return (
    <Wrap>
      <Title>Redux 공부 : 카운터</Title>

      <h2>count : {number}</h2>
      <ItemBox>
        <Btn onClick={onDecrease} disabled={!isInputValid}>
          -
        </Btn>
        <Input type="number" value={diff} onChange={onChange} />
        <Btn onClick={onIncrease} disabled={!isInputValid}>
          +
        </Btn>
      </ItemBox>
    </Wrap>
  );
}

export default Counter;

const Wrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 3px solid black;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 36px;
  height: 36px;
  font-size: 20px;
  font-weight: bolder;
  background-color: skyblue;
  color: white;
  border: 2px solid #6aa6bf;
  border-radius: 4px;
  margin-inline: 2px;
`;

const Input = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100px;
  height: 36px;
  border: 2px solid #6aa6bf;
  font-size: 20px;
  text-align: center;
`;
