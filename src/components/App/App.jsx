import React from "react";
import "./App.css";
import GalleryForm from "../GalleryForm/GalleryForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [galleryList, setGalleryList] = useState([]);

  //on load, get gallery
  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
        console.log(galleryList);
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
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
