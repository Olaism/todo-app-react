import List from "./List";

const Lists = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <List key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
      ))}
    </ul>
  );
};

export default Lists;
