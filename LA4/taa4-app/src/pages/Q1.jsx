import React from "react";

function Welcome(props) {
  return (
    <div style={{ color: "blue", textAlign: "center" }}>
      <h1>Hello {props.name}</h1>
      <p>City: {props.city}</p>
      <p>Welcome to React Application</p>

      <p
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          fontSize: "12px",
        }}
      >
        Name: Vinayak Nautiyal <br />
        Reg No: 24BCE2195
      </p>
    </div>
  );
}

function App() {
  return <Welcome name="Vinayak Nautiyal" city="Vellore" />;
}

export default App;
