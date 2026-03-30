import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Q1 from "./pages/Q1";
import Q2 from "./pages/Q2";
import Q3 from "./pages/Q3";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Q6 from "./pages/Q6";
import Q7 from "./pages/Q7";
import Q8 from "./pages/Q8";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Assignment</h1>
      <h2>Select a Question</h2>

      <ul style={{ listStyle: "none" }}>
        <li><Link to="/q1">Q1</Link></li>
        <li><Link to="/q2">Q2</Link></li>
        <li><Link to="/q3">Q3</Link></li>
        <li><Link to="/q4">Q4</Link></li>
        <li><Link to="/q5">Q5</Link></li>
        <li><Link to="/q6">Q6</Link></li>
        <li><Link to="/q7">Q7</Link></li>
        <li><Link to="/q8">Q8</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q1" element={<Q1 />} />
        <Route path="/q2" element={<Q2 />} />
        <Route path="/q3" element={<Q3 />} />
        <Route path="/q4" element={<Q4 />} />
        <Route path="/q5" element={<Q5 />} />
        <Route path="/q6" element={<Q6 />} />
        <Route path="/q7" element={<Q7 />} />
        <Route path="/q8" element={<Q8 />} />
      </Routes>
    </Router>
  );
}

export default App;