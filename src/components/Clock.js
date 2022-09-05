import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.js";
import Time from "./Time";
import "./Clock.css";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

//images
import arrowUp from "../assets/desktop/angle-up-solid.svg";
import arrowDown from "../assets/desktop/angle-down-solid.svg";

export default function Clock({ clicked, handleIsClicked, handleIsMorning }) {
  const { data: timezone } = useFetch("https://ipwho.is");
  let abbr;
  let city;
  let country;

  if (timezone) {
    abbr = timezone.timezone.abbr;
    city = timezone.city;
    country = timezone.country;
  }

  const [greetings, setGreetings] = useState("Good Morning");
  const [isMorning, setIsMorning] = useState(true);

  const changeGreetings = (word) => {
    setGreetings(word);
    if (word === "Good Morning" || "Good Afternoon") {
      setIsMorning(true);
      handleIsMorning(true);
    } else if (word === "Good Evening") {
      setIsMorning(false);
      handleIsMorning(false);
    }
  };

  const [isClicked, setIsClicked] = useState(clicked);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  useEffect(() => {
    handleIsClicked(isClicked);
  }, [isClicked, handleIsClicked]);

  return (
    <section className="clock__time-wrapper">
      <p className="clock__time-welcome">
        <img
          className="clock__time-sun-moon"
          src={isMorning ? sun : moon}
          alt={isMorning ? "sun" : "moon"}
        />{" "}
        {greetings && greetings}, it's currently
      </p>
      <div className="clock__time">
        <Time changeGreetings={changeGreetings} />
        <span className="clock__time-span">{abbr && abbr}</span>
      </div>
      <div className="clock__time-wrapper2">
        <p className="clock__time-city">
          in {city && city}, {country && country}
        </p>
        <div className="clock__button-wrapper">
          <button className="clock__button" onClick={handleClick}>
            <p className="clock__button-text">{isClicked ? "less" : "more"}</p>
            <div className="clock__button-img-wrapper">
              {isClicked ? (
                <img
                  src={arrowDown}
                  alt="button"
                  className="clock__button-img-down"></img>
              ) : (
                <img
                  src={arrowUp}
                  alt="button"
                  className="clock__button-img-up"></img>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
