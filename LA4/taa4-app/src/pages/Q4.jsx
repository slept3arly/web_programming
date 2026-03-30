import React, { useState } from "react";

function App() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [grade, setGrade] = useState("");

  const box = {
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

  const calculate = () => {
    if (m1 === "" || m2 === "" || m3 === "") {
      setGrade("Enter all marks");
      return;
    }

    const avg = (parseFloat(m1) + parseFloat(m2) + parseFloat(m3)) / 3;

    if (avg >= 90) setGrade("A");
    else if (avg >= 75) setGrade("B");
    else setGrade("C");
  };

  return (
    <div style={box}>
      <h2>Grade Calculator</h2>

      <input
        type="number"
        placeholder="Mark 1"
        style={input}
        value={m1}
        onChange={(e) => setM1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Mark 2"
        style={input}
        value={m2}
        onChange={(e) => setM2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Mark 3"
        style={input}
        value={m3}
        onChange={(e) => setM3(e.target.value)}
      />

      <button style={button} onClick={calculate}>
        Calculate
      </button>

      <h3>Grade: {grade}</h3>

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
