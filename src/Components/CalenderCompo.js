import React, { useState } from "react";
import WorkingHrs from "./TotalWorkingHrs";
import "./MainStyle.css";
const CalenderCompo = ({ dates, todaysDate }) => {
  const onChangeLogin = () => {};
  return (
    <div>
      {dates.map((item) => (
        <>
          <div className="rowWrapper">
            <div className="dateday">
              <span className="day">{item.day}</span>

              <span>{item.dateString}</span>
            </div>
            {new Date(item.dateString).getTime() <
            new Date(todaysDate).getTime() ? (
              <span className="past">Past</span>
            ) : (
              <div className="timeWrapper">
                {WorkingHrs.map((item) => (
                  <div className="hrs">
                    <span>
                      <input
                        type="checkbox"
                        onClick={() => onChangeLogin}
                      ></input>
                    </span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border"></div>
        </>
      ))}
    </div>
  );
};

export default CalenderCompo;
