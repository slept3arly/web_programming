import React, { useState } from "react";

// IMPORT IMAGES
import img1 from "../images/image1.webp";
import img2 from "../images/image2.webp";
import img3 from "../images/image3.webp";

function Q3() {
  const images = [img1, img2, img3];

  const [selected, setSelected] = useState(images[0]);

  const container = {
    textAlign: "center",
    padding: "20px"
  };

  const previewStyle = {
    width: "220px",
    height: "auto",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "2px solid #333"
  };

  const thumbContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  };

  const thumbStyle = (img) => ({
    width: "100px",
    cursor: "pointer",
    border: selected === img ? "3px solid blue" : "1px solid #ccc",
    borderRadius: "4px"
  });

  return (
    <div style={container}>
      <h1>Image Gallery</h1>

      <img src={selected} alt="Selected preview" style={previewStyle} />

      <div style={thumbContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            style={thumbStyle(img)}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

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

export default Q3;