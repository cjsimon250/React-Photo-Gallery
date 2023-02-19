import axios from "axios";
import { useState } from "react";

function GalleryForm({ getGalleryItems }) {
  const [pictureInput, setPictureInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  //function to add photo to the database
  function handleAddPhoto() {
    const newPhoto = {
      path: pictureInput,
      description: descriptionInput,
      likes: 0,
    };
    axios
      .post("/gallery", newPhoto)
      .then((reponse) => {
        getGalleryItems();
        clearInputFields();
      })
      .catch((error) => {
        console.log("error in handleAddPhoto", error);
      });
  }

  //function to clear input fields
  const clearInputFields = () => {
    setDescriptionInput("");
    setPictureInput("");
  };

  return (
    <>
      <label>Photo</label>
      <input></input>
      <label>Photo Description</label>
      <input></input>
      <button onClick={handleAddPhoto}>Add Photo</button>
    </>
  );
}

export default GalleryForm;
