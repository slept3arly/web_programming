import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const box = {
    width: "260px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #333",
    borderRadius: "6px",
    textAlign: "center"
  };

  const input = {
    width: "100%",
    margin: "6px 0",
    padding: "6px"
  };

  const button = {
    margin: "5px",
    padding: "6px 10px",
    cursor: "pointer"
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={box}>
      <h2>Todo List</h2>

      <input
        value={task}
        style={input}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button style={button} onClick={addTask}>
        Add
      </button>

      {list.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p>{item}</p>
          <button style={button} onClick={() => removeTask(index)}>
            Delete
          </button>
        </div>
      ))}

      <p
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          fontSize: "12px"
        }}
      >
        Name: Vinayak Nautiyal <br />
        Reg No: 24BCE2195
      </p>
    </div>
  );
}

export default App;
