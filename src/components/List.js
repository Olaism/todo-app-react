const List = ({ tasks, task, setTasks }) => {
  const taskDeleteHandler = () => {
    setTasks(tasks.filter((currTask) => currTask.id !== task.id));
  };
  const taskCompletedHandler = () => {
    setTasks(
      tasks.map((currTask) =>
        currTask.id === task.id
          ? { ...currTask, completed: !currTask.completed }
          : currTask
      )
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${task.completed ? "completed" : ""}`}>
        {task.task}
      </li>
      <button className="complete-btn" onClick={taskCompletedHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={taskDeleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default List;
