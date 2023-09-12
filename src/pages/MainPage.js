import { useState } from "react";
import { styled } from "styled-components";
import CounterContainer from "../containers/CounterContainer";
import ToDoList from "../components/ToDoList";

const MainPage = () => {
  const [category, setCategory] = useState("count");

  return (
    <Wrapper>
      <Container>
        <Btn onClick={() => setCategory("count")}>COUNT</Btn>
        <Btn onClick={() => setCategory("todoList")}>TO-Do LIST</Btn>
      </Container>
      <Item>{category === "count" ? <CounterContainer /> : <ToDoList />}</Item>
    </Wrapper>
  );
};

export default MainPage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-evenly;
`;
const Item = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 10px;
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 16px;
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
