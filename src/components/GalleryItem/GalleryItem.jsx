import { useState } from "react";
import axios from "axios";

function GalleryItem({ item, getGalleryList }) {
  let [beenClicked, setBeenClicked] = useState(false);

  function showDescription() {
    setBeenClicked(true);
  }
  function showImage() {
    setBeenClicked(false);
  }

  function handleLike() {
    const id = item.id;
    axios
      .put(`gallery/like/${id}`)
      .then((response) => {
        getGalleryList();
      })
      .catch((error) => {
        console.log("error in handleLike:", error);
      });
  }

  if (beenClicked === false) {
    return (
      <div className="galleryItem">
        <img src={item.path} onClick={showDescription}></img>
        <p>Likes: {item.likes}</p>
        <button onClick={handleLike} className="like-btn">
          Like
        </button>
      </div>
    );
  } else {
    return (
      <div className="galleryItem">
        <p>{item.description}</p>
        <p>Likes: {item.likes}</p>
        <button onClick={handleLike} className="like-btn">
          Like
        </button>
        <button onClick={showImage} className="show-img-btn">
          Show Picture
        </button>
      </div>
    );
  }
}

export default GalleryItem;
