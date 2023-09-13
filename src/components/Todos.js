import { useState } from "react";
import TodoList from "./TodoList";
import { styled } from "styled-components";

const Todos = ({ todos, onCreate, onToggle, onDelete }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <Wrap>
      <Title>To do List</Title>
      <Form onSubmit={onSubmit}>
        <Input value={text} onChange={onChange} />
        <AddBtn type="submit">추가</AddBtn>
      </Form>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </Wrap>
  );
};

export default Todos;

const Wrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 600px;
  border: 3px solid black;
  border-radius: 16px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  width: 400px;
  height: 80px;
  margin: 10px;
  padding-top: 10px;
  border-bottom: 2px solid black;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 400px;
`;

const Input = styled.input`
  width: 300px;
  height: 32px;
  outline: none;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid black;
`;

const AddBtn = styled.button`
  padding: none;
  background-color: black;
  border: 1px solid black;
  height: 32px;
  margin-right: 10px;
  width: 70px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
