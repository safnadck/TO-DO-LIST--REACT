import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css';
import Todoitems from './Todoitems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
    count = localStorage.getItem("todos_count") || 0;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className='todo'>
      <div className="todo-header">TO-DO LIST</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
