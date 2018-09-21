import React from "react";
// import "./scrapbook.css"
import imageData from "./image_data";
import ScrapBookImage from "./scrapbook_images";

const ScrapBook = () => {
  const images = imageData.map((src, index) => {
    return <ScrapBookImage key={index} about={src}/>
  });
  return (
    <div className="scrapbook-container">
      {images}
    </div>
  );
};

export default ScrapBook;
