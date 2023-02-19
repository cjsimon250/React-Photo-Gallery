import React from "react";
import "./App.css";
import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [galleryItems, setGalleryItems] = useState([
    // {
    //   id: 1,
    //   path: "images/goat_small.jpg",
    //   description: "Photo of a goat taken at Glacier National Park.",
    //   likes: 0,
    // },
    // {
    //   id: 2,
    //   path: "images/goat_copy.jpg",
    //   description: "Goated",
    //   likes: 0,
    // },
    // {
    //   id: 3,
    //   path: "images/goat_copy2.jpg",
    //   description: "Goated",
    //   likes: 0,
    // },
    // {
    //   id: 4,
    //   path: "images/goat_copy3.jpg",
    //   description: "Yep, goat picture.",
    //   likes: 0,
    // },
    // {
    //   id: 5,
    //   path: "images/goat_copy4.jpg",
    //   description: "sorry, new goat",
    //   likes: 0,
    // },
  ]);

  //on load, get gallery
  useEffect(() => {
    getGalleryList();
  }, []);

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
      <GalleryForm />
      <GalleryList
        galleryItems={galleryItems}
        getGalleryList={getGalleryList}
      />
    </div>
  );
}

export default App;
