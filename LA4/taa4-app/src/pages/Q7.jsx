import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

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

  const searchBooks = async () => {
    if (query.trim() === "") {
      setError("Enter a search term");
      setBooks([]);
      return;
    }

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query.trim()}`
      );
      const data = await res.json();
      setBooks(data.items || []);
      setError("");
    } catch (err) {
      setError("Error fetching books");
      setBooks([]);
    }
  };

  return (
    <div style={box}>
      <h2>Book Explorer</h2>

      <input
        style={input}
        placeholder="Search book"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button style={button} onClick={searchBooks}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {books.map((b, i) => (
        <p key={i}>
          {b.volumeInfo.title || "No Title"}
        </p>
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
