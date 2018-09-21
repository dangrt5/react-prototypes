import React from "react";
import ImageData from "./image_data";
import "./scrapbook.css";

const ScrapBookImage = (props) => {
  const {src, style} = props.about;
  console.log(props);
  return (
    <img className="scrapbook-image" src={src} style={style}/>
  )
}

export default ScrapBookImage;
