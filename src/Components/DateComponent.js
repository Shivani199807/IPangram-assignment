import React from "react";
import "./DateComponent.css";
const DateComponent = ({ currentDate, previousWeek, nextWeek }) => {
  return (
    <div className="wrapperDiv">
      <div>
        <span onClick={previousWeek}>Previous Week</span>
      </div>
      <div>{currentDate}</div>
      <div>
        <span onClick={nextWeek}>Next week</span>
      </div>
    </div>
  );
};

export default DateComponent;
