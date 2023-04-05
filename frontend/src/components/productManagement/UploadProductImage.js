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

  const handleImageUpload = async () => {
    console.log("image upload called");
    // const formData = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   formData.append("file", images[i]);
    //   formData.append("upload_preset", "canadabuys813a");
    //   formData.append("cloud_name", "dihkowyae");

    //   fetch(cloudinaryURL, {
    //     method: "post",
    //     body: formData,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data["url"]);
    //       urls.push(data["url"]);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
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
      {/* add multiple after input */}
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
