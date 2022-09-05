import React, { useState } from "react";
import Clock from "../src/components/Clock";
import Quote from "../src/components/Quote";
import DetailBar from "../src/components/DetailBar";
import { useMediaPredicate } from "react-media-hook";
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

// change background depend on media
  
  const media1023 = useMediaPredicate("(max-width: 1023px)");
  const media639 = useMediaPredicate("(max-width: 376px)");

  const backgroundDesktop = isMorning
    ? "clock__background--day-desktop"
    : "clock__background--night-desktop";
  const backgroundMobile = isMorning
    ? "clock__background--day-mobile"
    : "clock__background--night-mobile";

  const backgroundTablet = isMorning
    ? "clock__background--day-tablet"
    : "clock__background--night-tablet";
  
  const changeBackground = () => {
    if (media1023) {
      if (media639) {
        return (backgroundMobile);
      }
      return (backgroundTablet);
    } else {
      return (backgroundDesktop);
    }
  }


  return (
    <main className="clock">
      <div
        className={`clock__background  
        ${changeBackground()}`}></div>
      <section className={`clock__wrapper ${isClicked ? "move--padding" : null}`}>
        <Quote />
        <Clock
          clicked={isClicked}
          handleIsClicked={handleIsClicked}
          handleIsMorning={handleIsMorning}
        />
      </section>
      <DetailBar isClicked={isClicked} isMorning={isMorning} />
    </main>
  );
}
