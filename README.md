# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




Build an Accessible Image Gallery using React
Overview

It’s time for some more galleries! The Gallery project from previous weeks as a React application. It’s useful to build the same application in the new paradigm so you can draw direct comparisons and see how the new approach is different from the old one.

React requires a slightly different way of thinking than plain HTML and JavaScript, but it’s the same technologies under the hood. The main differences are - surprise, surprise - in the way what is being displayed by your components reacts to changes in the data, rather than manually updating the DOM ourselves.
Topics

    React: JSX, Components and Props
    React Hooks: useState, useEffect
    State and managing state
    Event Handling
    Lists and Keys
    Accessibility (ARIA attributes, keyboard navigation considerations)

Resources

    Image Gallery API
    React: Writing Markup with JSX
    React: Your First Component
    React: Passing Props to a Component
    React: Rules of Hooks
    React: useState
    React: Managing State
    React: useEffect
    React: Lifecycle of Reactive Effects
    React: Responding to Events
    React: Rendering Lists
    React: Updating Objects in State
    WAI-ARIA Basics
    MDN: Accessibility in React
    WebAIM: Alternative Text

Instructions
User Stories

    🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
    🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
    🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
    🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
    🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
    🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
    🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

Requirements

    🎯 Implement the useState hook to manage gallery state (e.g. selected image).
    🎯 Use useEffect for initial fetching of images from an external API.
    🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
    🎯 Use the .map() function to render an array of images dynamically
    🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
    🎯 Ensure all images have meaningful alt text.
    🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

How to Deploy

Aim to deploy on Render when you have enough time afterwards to debug any potential problems, which will be listed in the production logs.

To begin, ensure your project has been pushed to GitHub. Then, go to Render. You should already have an account at this point, but if not, make an account (or sign-in through GitHub).
Deploying a React App to Render

    Click ‘+ New’ and choose ‘Static Site’.
    Select the same project and click ‘Connect →’.
    Here is what we need on the options page:
        Build Command: npm install && npm run build (or npm install; npm run build, as should be pre-filled in for you)
        Publish directory: dist
        Environment variables: add anything in your client-side .env file in here.
    Now, you can ‘Deploy Static Site’!

Stretch Goals

To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.
Stretch User Stories

    🐿️ As a user, I want to be able to change the images in the gallery using a search bar.
    🐿️ As a developer, I want to be able to fetch images from an API with a larger amount of data, such as Unsplash.
    🐿️ As a developer I don’t want anyone to know my API keys from code.
    🐿️ As a user I want the app to look pleasing.

Stretch Requirements

    🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
    🏹 Set up an Unsplash application that you can fetch from your React app.
    🏹 Use .env to hide your API keys and tokens from the code.
    🏹 Style the application excellently, using grid or flex and positioning.

Reflection

Please also provide an assignment reflection in your project README.md file.
Required

    🎯 What requirements did you achieve?
    🎯 Were there any requirements or goals that you were unable to achieve?
    🎯 If so, what was it that you found difficult about these tasks?

Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

    Requesting feedback about a specific part of your submission.
    What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    What errors or bugs did you encounter while completing your assignment? How did you solve them?
    What went really well and what could have gone better?

Submission Instructions

Please submit your Render deployment URL and your GitHub repository URL.


///////////////////////////////// REFLECTION /////////////////////////////////////

I managed to complete most of the requirements with a modal for the large image view, aria labels for accessibility, grid and flexbox with responsiveness for most if not all devices. There is also some keyboard access for navigating images within the modal view, using Arrow keys, Enter, Spacebar, and Escape to exit the modal view. The @media css was a bit tricky but I think I accompished what I wanted to.

I created my own Api with 36 images held on my personal photo website but unfortunately had CORS errors when I tried to use it. I think I needed to modify my .htaccess file to get it to work which I wasn't prepared to do as it can cause issues if something goes wrong. I also needed to disable hotlinking to allow image use. Maybe I will try this on another occasion.


I took inspiration from the following resources.

- YouTube video tutorial for the modal popup.
- I used a modified switch statement from my week 2 image gallery for key presses.
- I used the usual MDN and W3 Schools resources for reference mainly for the css grid and flexbox layout, I found 'object-fit' which was very handy for the modal view. Also MDN for aria label info.
- I researched the 'useCallback' hook here - https://react.dev/reference/react/useCallback
- and keypress listeners here - https://www.dhiwise.com/post/how-does-react-listen-for-keypress-events-an-essential-guide
