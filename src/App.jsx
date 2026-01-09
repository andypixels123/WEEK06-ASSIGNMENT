import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Thumbnails from "./components/Thumbnails";
import Button from "./components/Button";

// ! DO NOT PUT ALL YOUR CODE IN JUST App.jsx
// ! USE COMPONENTS

// Start with a wireframe: build you react app UI first, then start coding

// state
// - variable to store API image data
// - variable to store current image

// effects
// - fetch data from the API
// - once it's fetched, put it in state

// functions (event handlers)
// - when a user clicks an image
// - when a user presses a button that should switch the image (left and right)

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => { // prevent infinite loop // prevent react from reacting
    async function fetchData() {
      const response = await fetch(
        "https://week-6-api.vercel.app/api/images"
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const [currentImg, setCount] = useState(0);

  function handleNext() {
    if (currentImg > 4) {
      setCount(0);
    } else {
      setCount(currentImg + 1);
      // console.log(currentImg);
    }
  }

  function handlePrevious() {
    if (currentImg < 1) {
      setCount(5);
    } else {
      setCount(currentImg - 1);
    };
    // console.log(currentImg);
  }

  function handleModal() {
    // close modal (popup) image
    console.log("modal clicked");
  }

  function handleThumbs(e) {
    // show clicked thumbnail in modal
    // use image.id to select correct image?
    // console.log(e.target.id);
    setCount((e.target.id) - 1);
  }

  return (
    <>
      <Modal handler={handleModal} image={images[currentImg]} />
      <Thumbnails handler={handleThumbs} images={images} />
      <span id="buttonContainer">
        <Button handler={handlePrevious} text="Previous" />
        <Button handler={handleNext} text="Next" />
      </span>
    </>
  );
}

export default App;
