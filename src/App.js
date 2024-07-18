import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import "./App.css";

const App = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [items, setItems] = useState([]);

  const itemEventTitle = (event) => {
    setInputTitle(event.target.value);
  };

  const itemEventDescription = (event) => {
    setInputDescription(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [
        ...oldItems,
        {
          id: Date.now(),
          title: inputTitle,
          description: inputDescription,
          completed: false,
        },
      ];
    });
    setInputTitle("");
    setInputDescription("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem) => arrElem.id !== id);
    });
  };

  const updateItems = (id, newTitle, newDescription) => {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id
          ? { ...item, title: newTitle, description: newDescription }
          : item
      )
    );
  };

  const completeItems = (id) => {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Title"
            value={inputTitle}
            onChange={itemEventTitle}
          />
          <textarea
            placeholder="Add Description"
            value={inputDescription}
            onChange={itemEventDescription}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((item, index) => (
              <ToDoLists
                key={index}
                id={item.id}
                text={item.title}
                description={item.description}
                completed={item.completed}
                onDelete={deleteItems}
                onUpdate={updateItems}
                onComplete={completeItems}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
