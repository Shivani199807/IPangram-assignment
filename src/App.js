import "./App.css";
import React, { useState, useEffect } from "react";
import DateComponent from "./Components/DateComponent";
import TimeZone from "./Components/TimeZone";
import CalenderCompo from "./Components/CalenderCompo";

function App() {
  //here setting the timezone initially its  ist timezone
  const [timeZone, setTimeZone] = useState("UTC timeZone-05:30(IST)");

  // here setting the current date based on timezone. Initally it is indian time zone date which we are getting as per our laptop
  //system date .
  const [timeZoneDate, setTimeZoneDate] = useState(new Date());

  // here con change of timezone updating the hrs whether it is indian time zone of UTC-0 which is 5:30 hrs early
  useEffect(() => {
    if (timeZone == "UTC timeZone-0") {
      const todayUTC = new Date(
        timeZoneDate.getTime() + timeZoneDate.getTimezoneOffset() * 60 * 1000
      );
      setTimeZoneDate(todayUTC);
    } else {
      setTimeZoneDate(new Date());
    }
  }, [timeZone]);

  //here calculating the start week of current date

  const startOfWeekUTC = new Date(
    timeZoneDate.getUTCFullYear(),
    timeZoneDate.getUTCMonth(),
    timeZoneDate.getUTCDate() - timeZoneDate.getUTCDay() + 1
  );
  const options = { month: "short", day: "numeric", year: "numeric" };
  const refinedDate = timeZoneDate
    .toLocaleString("en-US", options)
    .replace(/ /g, "");

  // Initialize the current week's dates
  const [dates, setDates] = useState(getWeekDates(startOfWeekUTC));

  // function to get the week dates
  function getWeekDates(startOfWeekUTC) {
    const dates = [];

    for (let i = 0; i < 5; i++) {
      const dateUTC = new Date(startOfWeekUTC);

      dateUTC.setUTCDate(dateUTC.getUTCDate() + i);

      const dateString = dateUTC
        .toLocaleString("en-US", options)
        .replace(/ /g, "");

      const day = dateUTC.toString().split(" ").slice(0, 1).join(" ");

      dates.push({ dateUTC, dateString, day });
    }
    return dates;
  }
  // here updating the dates state based on previous and next week
  function updateWeekDates(weekStartUTC) {
    setDates(getWeekDates(weekStartUTC));
  }
  // function to calculate the previous week dates
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

  // function to calculate the next week dates
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
    <div className="pageWrapper">
      <DateComponent
        currentDate={refinedDate}
        previousWeek={previousWeek}
        nextWeek={nextWeek}
      />
      <TimeZone setTimeZone={setTimeZone} />
      <CalenderCompo dates={dates} todaysDate={refinedDate} />
    </div>
  );
}

export default App;
