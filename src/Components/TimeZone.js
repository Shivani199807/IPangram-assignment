import React from "react";

const TimeZone = () => {
  return (
    <div className="timeZonWrapper">
      <label for="cars">TimeZone:</label>

      <select className="timeNew">
        <option value="volvo">Utc TimeZone</option>
        <option value="saab">Saab</option>
      </select>
    </div>
  );
};

export default TimeZone;
