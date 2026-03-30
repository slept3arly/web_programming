import React, { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const box = {
    width: "300px",
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

  const searchCountry = async () => {
    if (country.trim() === "") {
      setError("Enter a country name");
      setData([]);
      return;
    }

    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${country.trim()}`
      );

      if (!res.ok) {
        throw new Error("Not found");
      }

      const result = await res.json();
      setData(result);
      setError("");
    } catch (err) {
      setError("Country not found");
      setData([]);
    }
  };

  return (
    <div style={box}>
      <h2>Country Explorer</h2>

      <input
        style={input}
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button style={button} onClick={searchCountry}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data.map((c, index) => (
        <div
          key={index}
          style={{
            borderTop: "1px solid #ccc",
            marginTop: "10px",
            paddingTop: "10px"
          }}
        >
          <h3>{c.name.common}</h3>

          <p>Capital: {c.capital ? c.capital[0] : "N/A"}</p>

          <p>Population: {c.population.toLocaleString()}</p>

          <p>Region: {c.region}</p>

          <img src={c.flags.png} alt="flag" width="100" />
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
