import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Quote.css";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

export default function Quote({ isClicked }) {
  const url = "https://programming-quotes-api.herokuapp.com/Quotes/random";
  const [update, setUpdate] = useState(true);
  const { data: quote } = useFetch(url, update);

  const handleQuoteChange = () => {
    setUpdate((prevState) => !prevState);
  };

  return (
    <section className="clock__quote">
      <div className="clock__quote-wrapper">
        <p className="clock__quote-text">{quote && quote.en}</p>
        <button className="clock__quote-refresh" onClick={handleQuoteChange}>
          <img
            className="clock__quote-refresh-img"
            src={refreshIcon}
            alt="refresh"
          />
        </button>
      </div>
      <p className="clock__quote-author">{quote && quote.author}</p>
    </section>
  );
}
