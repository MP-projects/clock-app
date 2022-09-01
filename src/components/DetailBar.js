import React from "react";
import { useFetch } from "../hooks/useFetch";
import "./DetailBar.css";

export default function DetailBar({ isClicked }) {
  const { data: detail } = useFetch("http://worldtimeapi.org/api/ip");

  return (
    <div
      className={`detailBar ${isClicked ? "move" : null}`}>
      <div className="detailBar__wrapper">
        <aside className="detailBar__aside">
          <div className="detailBar__row">
            <p className="detailBar__timezone-text text">current timezone</p>
            <p className="detailBar__timezone-city text-api">
              {detail && detail.timezone}
            </p>
          </div>
          <div className="detailBar__row">
            <p className="detailBar__days-year-text text">day of the year</p>
            <p className="detailBar__days-year-days text-api">
              {detail && detail.day_of_year}
            </p>
          </div>
        </aside>
        <aside className="detailBar__aside">
          <div className="detailBar__row">
            <p className="detailBar__days-week-text text">day of the week</p>
            <p className="detailBar__days-week-days text-api">
              {detail && detail.day_of_week}
            </p>
          </div>
          <div className="detailBar__row">
            <p className="detailBar__week-text text">week number</p>
            <p className="detailBar__week-number text-api">
              {detail && detail.week_number}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
