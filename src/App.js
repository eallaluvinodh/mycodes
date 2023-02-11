import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [task, setTask] = useState("");

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const [todos, setTodos] = useState([]);
  const submitHandler = (e) => {
    // e.preventDefault();
    if (task === "") {
      alert("please enter the task");
    } else {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
    }
  };
  const deleteHandler = (indexValue) => {
    const newtodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newtodos);
  };
  return (
    <div className="container mt-5 w-50">
      <h4 className="center">Todo App</h4>
      <div className="input-group  ">
        <input
          className="form-control "
          onChange={changeHandler}
          type="text"
          value={task}
        ></input>
        <button onClick={submitHandler} className="btn btn-primary">
          Add
        </button>
        <TodoList todos={todos} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
