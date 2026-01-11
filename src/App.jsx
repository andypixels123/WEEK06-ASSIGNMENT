import { useState, useEffect, useCallback } from "react";
import Modal from "./components/Modal";
import Thumbnails from "./components/Thumbnails";
import Button from "./components/Button";

// ! DO NOT PUT ALL YOUR CODE IN JUST App.jsx
// ! USE COMPONENTS

// THE PLAN >>
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
  const [currentImg, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // fetch API data
  // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

  useEffect(() => { // prevent infinite loop // prevent react from reacting
    async function fetchData() {
      const response = await fetch(
        "https://week-6-api.vercel.app/api/images"
        // "https://www.andrewbirchphotography.com/api/reactGallery"
      );
      const data = await response.json();
      setImages(data);
      // console.log(data);
    }
    fetchData();
  }, []);


  //'useCallback' is a React Hook that caches function definition between renders
  // next image in gallery
  const handleNext = useCallback(() => {
    setCurrentImage((currentImg) => (currentImg > 4 ? 0 : currentImg + 1));
  }, []);

  // previous image in gallery
  const handlePrev = useCallback(() => {
    setCurrentImage((currentImg) => (currentImg < 1 ? 5 : currentImg - 1));
  }, []);

  useEffect(() => {
    const handleKeypress = (e) => {
      switch (e.key) {
        case "ArrowRight":
          console.log("right arrow pressed");
          handleNext();
          break;
        case "ArrowLeft":
          console.log("left arrow key pressed");
          handlePrev();
          break;
        case "Enter":
          console.log("enter pressed");
          setShowModal(true);
          setShowButtons(true);
          break;
        case " ":
          console.log("spacebar pressed");
          break;
        case "Escape":
          setShowModal(false);
          setShowButtons(false);
          break;
        // case "Tab":
        //   handleNext();
      }
    };
    window.addEventListener("keyup", handleKeypress);

    // remove to prevent duplicates and memory issues on re-render
    return () => window.removeEventListener("keyup", handleKeypress);
  }, [handleNext, handlePrev]);

  function handleThumbs(e) {
    // use image.id to select correct image?
    console.log((e.target.id) - 1);
    setCurrentImage((e.target.id) - 1);
    setShowModal(true);
    setShowButtons(true);
  }

  // HTML including components
  return (
    <>
      <header><h1>FROGS</h1></header>
      <div id="imageContainer" aria-roledescription="carousel" aria-label="frog images thumbnails">
        <Thumbnails handler={handleThumbs} images={images} />
        {showModal && <Modal image={images[currentImg]} onClose={() => { setShowModal(false); setShowButtons(false) }} />}
      </div>
      {showButtons && <div id="buttonContainer">
        <Button btnclass="btn" handler={handlePrev} text="&lt;" ariaText="click for previous image" tabText="1" />
        <Button btnclass="btn" handler={handleNext} text="&gt;" ariaText="click for next image" tabText="2" />
      </div>}
    </>
  );
}
export default App;
