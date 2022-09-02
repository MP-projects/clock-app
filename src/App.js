import React, { useState } from "react";
import Clock from "../src/components/Clock";
import Quote from "../src/components/Quote";
import DetailBar from "../src/components/DetailBar";
import "./App.css";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMorning, setIsMorning] = useState(true);

  const handleIsClicked = (isClicked) => {
    setIsClicked(isClicked);
  };

  const handleIsMorning = (isMorning) => {
    setIsMorning(isMorning);
  };

  return (
    <div className="clock">
      <div className={`clock__background ${ isClicked ? "height" : null } ${isMorning ? "clock__background--day" : "clock__background--night" }`}></div>
      <div className={`clock__wrapper ${isClicked ? "move" : null}`}>
        <Quote />
        <Clock
          clicked={isClicked}
          handleIsClicked={handleIsClicked}
          handleIsMorning={handleIsMorning}
        />
      </div>
      <DetailBar isClicked={isClicked} />
    </div>
  );
}
