/* 
Author: Yogesh Kumar
This handles the image input from the seller for listing items.
*/
import { Button, ImageList } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const UploadProductImage = ({ getDataFromPictures }) => {
  // useState array images
  const [images, setImages] = useState([]);
  const [imageSingle, setimageSingle] = useState("");
  const urls = [];
  const cloudName = "dihkowyae";
  const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const handleImageChange = (e) => {
    setImages(e.target.files);
    getDataFromPictures(e.target.files);
  };

  return (
    <div>
      <ImageList id="uploaded-images" cols={0.5}>
        {Array.from(images).map((image) => {
          return (
            <img src={image ? URL.createObjectURL(image) : null} width={400} />
          );
        })}
      </ImageList>
      {/* add multiple files as input */}
      <input onChange={handleImageChange} multiple type="file" />
    </div>
  );
};

export default UploadProductImage;
