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

  // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

  // fetch API data
  const [images, setImages] = useState([]);
  useEffect(() => { // prevent infinite loop // prevent react from reacting
    async function fetchData() {
      const response = await fetch(
        "https://week-6-api.vercel.app/api/images"
      );
      const data = await response.json();
      setImages(data);
      // console.log(data);
    }
    fetchData();
  }, []);

  const [currentImg, setCurrentImage] = useState(0);
  // useCallback is a React Hook that caches function definition between re-renders
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
          // todo
          break;
        case " ":
          console.log("spacebar pressed");
          // todo
          break;
        case "Tab":
          console.log("tab pressed");
        // todo if required
      }
    };
    window.addEventListener("keyup", handleKeypress);

    // remove to prevent duplicates and memory issues on re-render
    return () => window.removeEventListener("keyup", handleKeypress);
  }, [handleNext, handlePrev]);

  function handleThumbs(e) {
    // use image.id to select correct image?
    // console.log(e.target.id);
    setCurrentImage((e.target.id) - 1);
  }

  // HTML including components
  return (
    <>
      <div id="buttonContainer">
        <Button handler={handlePrev} text="Previous" ariaText="click for previous image" tabText="7" />
        <Button handler={handleNext} text="Next" ariaText="click for next image" tabText="8" />
      </div>
      <div id="imageContainer" aria-roledescription="carousel" aria-label="frog images thumbnails">
        <Thumbnails handler={handleThumbs} images={images} />
        <Modal image={images[currentImg]} />
      </div>
    </>
  );
}

// sample code from week2 gallery assignment
// window.addEventListener("keyup", (e) => {
//   if (!e.repeat) { // for 'keydown' event only
//     if (e) {
//       console.log(e.key);
//       switch (e.key) { // match key pressed
//         case "ArrowLeft": showPrev();
//           break;
//         case "p": showPrev();
//           break;
//         case "ArrowRight": showNext();
//           break;
//         case "n": showNext();
//           break;
//         case "1": currentImg = 0; createFullscreenImage(currentImg);
//           break;
//         case "2": currentImg = 1; createFullscreenImage(currentImg);
//           break;
//         case "3": currentImg = 2; createFullscreenImage(currentImg);
//           break;
//         case "4": currentImg = 3; createFullscreenImage(currentImg);
//           break;
//         case "5": currentImg = 4; createFullscreenImage(currentImg);
//       }
//     }
//   });

export default App;
