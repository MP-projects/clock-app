import React, { useEffect } from "react";
import { useFetchTime } from "../hooks/useFetchTime";
import "./Time.css";

export default function Time({ changeGreetings }) {
  const { data: time } = useFetchTime("https://worldtimeapi.org/api/ip");

  let finalHours;
  let finalMinutes;
  let greetings;
  let currentTime;

  if (time) {
    let date = new Date(time.datetime);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
      finalHours = `0${hours}`;
    } else {
      finalHours = hours;
    }

    if (minutes < 10) {
      finalMinutes = `0${minutes}`;
    } else {
      finalMinutes = minutes;
    }

    if (hours < 12) {
      greetings = "Good Morning";
    }
    if (hours >= 12 && hours <= 18) {
      greetings = "Good Afternoon";
    }
    if (hours >= 18 && hours < 24) {
      greetings = "Good Evening";
    }
    currentTime = `${finalHours}:${finalMinutes}`;
  }

  useEffect(() => {
    if (greetings) {
      changeGreetings(greetings);
    }
  }, [greetings, changeGreetings]);

  return <>{time && currentTime}</>;
}
