import React, { useState } from "react";
import Clock from "../src/components/Clock";
import Quote from "../src/components/Quote";
import DetailBar from "../src/components/DetailBar"
import "./App.css";

export default function App() {
  const [isClicked, setIsClicked] = useState(null);

  const handleIsClicked = (isClicked) => {
    setIsClicked(isClicked);
  };

  
  return (
    <div className="clock">   
      <div className="clock__background" style = {isClicked ? {height: "450px"} : null}></div>
      <div className={`clock__wrapper ${isClicked ? 'move' : null}`}>
        <Quote/>
        <Clock clicked={isClicked} handleIsClicked={handleIsClicked} /> 
      </div>
      <DetailBar isClicked={isClicked}/>
    </div>
  );
}
