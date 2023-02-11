import React from "react";
import "./App.css";

const TodoList = ({ todos, deleteHandler }) => {
  return (
    <div className="container">
      <ul className="list-group mt-4">
        {todos.map((list, index) => (
          <li className="list-group-item">
            {list}
            <button onClick={() => deleteHandler(index)} className="btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
