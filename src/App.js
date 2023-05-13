import "./App.css";
import React, { useState } from "react";
import DateComponent from "./Components/DateComponent";
import TimeZone from "./Components/TimeZone";
import CalenderCompo from "./Components/CalenderCompo";

function App() {
  const today = new Date();
  const todayUTC = new Date(
    today.getTime() + today.getTimezoneOffset() * 60 * 1000
  );

  const startOfWeekUTC = new Date(
    todayUTC.getUTCFullYear(),
    todayUTC.getUTCMonth(),
    todayUTC.getUTCDate() - todayUTC.getUTCDay() + 1
  );
  const options = { month: "short", day: "numeric", year: "numeric" };
  const refinedDate = todayUTC
    .toLocaleString("en-US", options)
    .replace(/ /g, "");

  // Initialize the current week's dates
  const [dates, setDates] = useState(getWeekDates(startOfWeekUTC));
  function getWeekDates(startOfWeekUTC) {
    const dates = [];

    for (let i = 0; i < 5; i++) {
      const dateUTC = new Date(startOfWeekUTC);

      dateUTC.setUTCDate(dateUTC.getUTCDate() + i);

      const dateString = dateUTC
        .toLocaleString("en-US", options)
        .replace(/ /g, "");

      const day = dateUTC.toString().split(" ").slice(0, 1).join(" ");
      // console.log(day);
      dates.push({ dateUTC, dateString, day });
    }
    return dates;
  }

  function updateWeekDates(weekStartUTC) {
    setDates(getWeekDates(weekStartUTC));
  }

  const previousWeek = () => {
    const startOfPreviousWeekUTC = new Date(
      dates[0]["dateUTC"].getTime() - 7 * 24 * 60 * 60 * 1000
    );
    updateWeekDates(
      new Date(
        startOfPreviousWeekUTC.getUTCFullYear(),
        startOfPreviousWeekUTC.getUTCMonth(),
        startOfPreviousWeekUTC.getUTCDate() + 1
      )
    );
  };
  const nextWeek = () => {
    updateWeekDates(
      new Date(
        dates[0]["dateUTC"].getUTCFullYear(),
        dates[0]["dateUTC"].getUTCMonth(),
        dates[0]["dateUTC"].getUTCDate() + 8
      )
    );
  };

  return (
    <div>
      <DateComponent
        currentDate={refinedDate}
        previousWeek={previousWeek}
        nextWeek={nextWeek}
      />
      <TimeZone />
      <CalenderCompo dates={dates} todaysDate={refinedDate} />
    </div>
  );
}

export default App;
