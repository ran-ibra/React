
function Task({ task, deleteTask, toggleComplete }) {
  return (
    <div className="card p-3 mt-2 d-flex flex-row justify-content-between align-items-center shadow-sm">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#6c757d" : "black"
        }}
      >
        {task.text}
      </span>

      <div>
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Task;