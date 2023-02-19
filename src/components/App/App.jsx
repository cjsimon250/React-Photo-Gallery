import React from "react";
import "./App.css";
import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  //on load, get gallery
  useEffect(() => {
    getGalleryList();
  }, []);

  //get all pictures in the gallery
  const getGalleryList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        let galleryArray = response.data;
        setGalleryItems(galleryArray);
      })
      .catch((error) => {
        alert("error in get GalleryList");
        console.log("error in get GalleryList:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm getGalleryList={getGalleryList} />
      <GalleryList
        galleryItems={galleryItems}
        getGalleryList={getGalleryList}
      />
    </div>
  );
}

export default App;
