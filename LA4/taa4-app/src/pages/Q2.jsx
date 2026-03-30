import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const container = {
    width: "260px",
    margin: "40px auto",
    padding: "15px",
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
    margin: "5px 5px 5px 0",
    padding: "6px 10px",
    cursor: "pointer"
  };

  const calculate = (operation) => {
    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "sub":
        setResult(n1 - n2);
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <div style={container}>
      <h2>Calculator</h2>

      <input
        type="number"
        style={input}
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        style={input}
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button style={button} onClick={() => calculate("add")}>
        Add
      </button>

      <button style={button} onClick={() => calculate("sub")}>
        Subtract
      </button>

      <h3>Result: {result}</h3>

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
