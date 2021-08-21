import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
const [name, setName] = useState(""); // 2 useState, ибо нужно триггерить кнопку и инпут
  const [newItems, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, name];
    });

    setName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((item) => (
            <ToDoItem key={item.id} arr={newItems} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
