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
      // console.log(data);
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

  // HTML including components
  return (
    <>
      <span id="buttonContainer">
        <Button handler={handlePrevious} text="Previous" ariaText="click for previous image" />
        <Button handler={handleNext} text="Next" ariaText="click for next image" />
      </span>
      <span id="imageContainer">
        <Modal handler={handleModal} image={images[currentImg]} />
        <Thumbnails handler={handleThumbs} images={images} />
      </span>
    </>
  );
}


// App.js
// keypress events from 'geeks for geeks.com'
// function App() {
//     const keyPress = (event) => {
//         console.log(event.key)
//     }
//     return (
//         <div className="App">
//             <h1>GeeksforGeeks</h1>
//             <input type='text'
//                    onKeyPress={keyPress}
//                    placeholder='Press here...' />
//         </div>
//     );
// }


// Detecting the Escape Key and Other Specific Actions
// Similarly, to detect the escape key or perform specific actions based on the key pressed, you can use conditional statements within your event handler:
// class EscapeKeyComponent extends React.Component {
//   handleKeyDown = (event) => {
//     if (event.key === 'Escape') {
//       console.log('Escape key pressed');
//     }
//   };

//   render() {
//     return <div onKeyDown={this.handleKeyDown} tabIndex="0">Press Escape</div>;
//   }
// }

// document.addEventListener("keyup", (e) => {
//     // if (!e.repeat) { // for 'keydown' event
//     if (e) {
//         // console.log(e.key);
//         switch (e.key) { // match key pressed
//             case "ArrowLeft": showPrev();
//                 break;
//             case "p": showPrev();
//                 break;
//             case "ArrowRight": showNext();
//                 break;
//             case "n": showNext();
//                 break;
//             case "1": currentImg = 0; createFullscreenImage(currentImg);
//                 break;
//             case "2": currentImg = 1; createFullscreenImage(currentImg);
//                 break;
//             case "3": currentImg = 2; createFullscreenImage(currentImg);
//                 break;
//             case "4": currentImg = 3; createFullscreenImage(currentImg);
//                 break;
//             case "5": currentImg = 4; createFullscreenImage(currentImg);
//         }
//     }
// });

// todo: create div with fixed position, 100vw, 100vh. Ue to detect keypresses ??
// todo: add tabIndex, use tab and enter keys to navigate thumbs ??

export default App;
