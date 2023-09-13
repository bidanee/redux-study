import React from "react";
import { styled } from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <Item>
      <label htmlFor={todo.id}>
        {todo.done ? (
          <ImCheckboxChecked size={20} />
        ) : (
          <ImCheckboxUnchecked size={20} />
        )}
      </label>
      <input
        id={todo.id}
        onClick={() => onToggle(todo.id)}
        type="checkbox"
        style={{ display: "none" }}
      />
      <Text style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </Text>

      <DeleteBtn onClick={() => onDelete(todo.id)}>삭제</DeleteBtn>
    </Item>
  );
});

export default TodoItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 32px;
  width: 400px;
  list-style-type: none;
`;
const Text = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: medium;
  margin-left: 8px;
  width: 300px;
`;

const DeleteBtn = styled.button`
  padding: none;
  background-color: black;
  border: 1px solid black;
  height: 32px;
  margin-right: 30px;
  width: 40px;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
