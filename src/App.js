import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  // State
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [option, setOption] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // USE EFFECTS

  // Run when any changes are made task lists
  // useEffect(() => saveLocalTasks(), [tasks]);

  // Run once when the DOM is loaded
  useEffect(() => getLocalTasks(), []);

  // Run anytime the tasks is updated or select value changed
  useEffect(() => filteredHandler(), [tasks, option]);

  // Functions
  const filteredHandler = () => {
    switch (option) {
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="container">
        <Form
          tasks={tasks}
          setTasks={setTasks}
          textInput={textInput}
          setTextInput={setTextInput}
          setOption={setOption}
        />
        <div className="todo-container">
          <Lists
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
          />
        </div>
        <button className="btn save-btn" onClick={saveLocalTasks}>
          Save tasks
        </button>
      </div>
    </div>
  );
}

export default App;
