import { useState } from "react";

function GalleryItem({ item, getGalleryList }) {
  let [beenClicked, setBeenClicked] = useState(false);

  function showDescription() {
    setBeenClicked(true);
  }
  function showImage() {
    setBeenClicked(false);
  }
  if (beenClicked === false) {
    return (
      <>
        <img src={item.path} onClick={showDescription}></img>
        <p>{item.description}</p>
        <p>Likes: {item.likes}</p>
      </>
    );
  } else {
    return (
      <>
        <p>{item.description}</p>
        <p>Likes: {item.likes}</p>
        <button onClick={showImage}>Show Picture</button>
      </>
    );
  }
}

export default GalleryItem;
