import { useState } from "react";
import TodoList from "./TodoList";

const Todos = ({ todos, onCreate, onToggle, onDelete }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요..."
          onChange={onChange}
        />
        <button type="submit">+</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default Todos;