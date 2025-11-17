
import Task from "./Task";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="mt-4">
      <h4 className="mb-3">Let's get some work done!</h4>

      {tasks.length === 0 && (
        <p className="text-muted">No tasks yet. Add one above!</p>
      )}

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
export default TaskList;