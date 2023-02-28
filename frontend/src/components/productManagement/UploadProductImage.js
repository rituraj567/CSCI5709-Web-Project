import { Button, ImageList } from "@mui/material";
import React, { useState } from "react";

const UploadProductImage = () => {
    // useState array images
    const [images, setImages] = useState([]);
    console.log("images");
    console.log(images);
    return (
      <div>
        <ImageList id="uploaded-images" cols={0.5}>
          {Array.from(images).map((image) => {
            return (
              <img src={image ? URL.createObjectURL(image) : null} width={400} />
            );
          })}
        </ImageList>
        <input
          onChange={(e) => {
            setImages(e.target.files);
          }}
          multiple
          type="file"
        />
      </div>
    );
  };
  
  export default UploadProductImage;