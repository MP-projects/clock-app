import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.js";
import Time from "./Time";
import "./Clock.css";

//images
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";

export default function Clock({clicked, handleIsClicked}) {
  const { data: timezone } = useFetch("https://ipwho.is");
  let abbr;
  let city;
  let country;

  if (timezone) {
    abbr = timezone.timezone.abbr;
    city = timezone.city;
    country = timezone.country;
  }

  const [greetings, setGreetings] = useState("");

  const changeGreetings = (word) => {
    setGreetings(word);
  };
  const [isClicked, setIsClicked] = useState(clicked);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  useEffect(()=> {
    handleIsClicked(isClicked)
  },[isClicked, handleIsClicked])


  return (
    <div className="clock__time-wrapper">
      <p className="clock__time-welcome">
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
              <img
                src={!isClicked ? arrowUp : arrowDown}
                alt="button"
                className="clock__button-img"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
