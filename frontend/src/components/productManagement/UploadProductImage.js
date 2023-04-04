import { Button, ImageList } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const UploadProductImage = () => {
  // useState array images
  const [images, setImages] = useState([]);
  const [url, seturl] = useState("");

  const handleImageChange = (e) => {
    setImages(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    console.log("image upload called");
    const formData = new FormData();
    formData.append("image", images);
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_SERVER + "/productmanagement/uploadimage",
      formData
    );

    seturl(response.data.url);
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
      <input onChange={handleImageChange} multiple type="file" />
      <div>
        <Button variant="contained" onClick={handleImageUpload}>
          Confirm images
        </Button>
      </div>
    </div>
  );
};

export default UploadProductImage;
