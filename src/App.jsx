import React from "react";
import { useState } from "react";
import "./index.css";

import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating
        maxRating={5}
        messages={["one", "two", "three", "four", "five"]}
      />
      <StarRating
        maxRating={10}
        starSize={12}
        fontSize={8}
        color={"blue"}
        className="test"
        defaultRating={3}
      />
    </>
  );
}

export default App;
