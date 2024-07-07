# Star Rating Component

This project provides a customizable Star Rating component for React applications. The component allows users to rate items using a star-based system, with features for hover effects and click interactions.

## Features

- **Customizable:** Configure the maximum rating, star color, size, and more through props.
- **Interactive:** Users can hover over stars to preview ratings and click to set their rating.
- **Accessibility:** Each star is accessible and responds to keyboard navigation.
- **Dynamic Content:** Supports displaying dynamic messages corresponding to each rating level.

## Components

### StarRating Component

The `StarRating` component manages the rating state and renders a set of `Star` components based on the `maxRating` prop. It supports the following props:

- `maxRating`: Maximum number of stars.
- `color`: Color of the stars.
- `fontSize`: Font size for the rating text.
- `starSize`: Size of each star.
- `className`: Additional CSS class for styling.
- `messages`: Array of messages corresponding to each rating level.
- `defaultRating`: Default rating to display.
- `onSetRating`: Callback function triggered when a rating is set.

### Star Component

The `Star` component is a presentational component used by `StarRating`. It renders a star icon and handles click and hover events. Props include:

- `onRate`: Callback function triggered when the star is clicked.
- `full`: Boolean indicating whether the star should be displayed as filled.
- `onHoverIn`: Callback function triggered when the mouse enters the star area.
- `onHoverOut`: Callback function triggered when the mouse leaves the star area.
- `color`: Color of the star.
- `size`: Size of the star icon.

## Usage

To use the `StarRating` component, import it into your React application and pass appropriate props:

```jsx
import React from "react";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <h1>Rate this product</h1>
      <StarRating
        maxRating={5}
        color="#ffc107"
        fontSize={24}
        starSize={40}
        messages={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
        defaultRating={0}
        onSetRating={(rating) => console.log(`Rated ${rating} stars!`)}
      />
    </div>
  );
}

export default App;
```
