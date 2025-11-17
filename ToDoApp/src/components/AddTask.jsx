import React, { useState } from "react";

export default function AddTask({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(text);
    setText(""); 
  };

  return (
    <div className="card p-4 shadow mb-4 bg-primary text-white">
      <h4>Add New To-Do</h4>

      <form onSubmit={handleSubmit} className="d-flex mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn btn-light">Add</button>
      </form>
    </div>
  );
}
