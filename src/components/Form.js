import React from "react";

const Form = ({ textInput, setTextInput, tasks, setTasks, setOption }) => {
  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTaskHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { task: textInput, completed: false, id: Date.now().toString() },
    ]);
    setTextInput("");
  };
  const filterHandler = ({ target }) => {
    setOption(target.value);
  };
  return (
    <form action="">
      <input
        type="text"
        value={textInput}
        onChange={textInputHandler}
        name=""
        className="todo-input"
      />
      <button type="submit" className="todo-button" onClick={submitTaskHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
