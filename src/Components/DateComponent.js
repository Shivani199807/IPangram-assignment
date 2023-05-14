import React from "react";
import "./MainStyle.css";
const DateComponent = ({ currentDate, previousWeek, nextWeek }) => {
  return (
    <div className="wrapperDiv">
      <div>
        <span onClick={previousWeek}>
          <i class="arrow left"></i>Previous Week
        </span>
      </div>
      <div>{currentDate}</div>
      <div>
        <span onClick={nextWeek}>
          {" "}
          Next week <i class="arrow right"></i>
        </span>
      </div>
    </div>
  );
};

export default DateComponent;
