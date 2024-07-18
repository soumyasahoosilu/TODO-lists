import React, { useState } from "react";

const ToDoLists = ({ id, text, description, completed, onDelete, onUpdate, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(text);
  const [newDescription, setNewDescription] = useState(description);

  const handleUpdate = () => {
    onUpdate(id, newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <div className="todo_style">
      <i className="fa fa-times" aria-hidden="true" onClick={() => onDelete(id)} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <li style={{ textDecoration: completed ? "line-through" : "none" }}>
            {text} - {description}
          </li>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onComplete(id)}>
            {completed ? "Undo" : "Complete"}
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoLists;
