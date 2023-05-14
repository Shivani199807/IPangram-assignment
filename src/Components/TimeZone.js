import React from "react";
import "./MainStyle.css";
const TimeZone = ({ setTimeZone }) => {
  const timeZoneSelected = (e) => {
    setTimeZone(e.target.value);
  };
  return (
    <div className="timeZonWrapper">
      <label for="cars">TimeZone:</label>

      <select className="timeNew" onClick={(e) => timeZoneSelected(e)}>
        <option value="UTC timeZone-05:30(IST)">UTC timeZone-05:30(IST)</option>
        <option value="UTC timeZone-0">UTC timeZone-0</option>
      </select>
    </div>
  );
};

export default TimeZone;
