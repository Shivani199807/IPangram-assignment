import React from "react";
import WorkingHrs from "./TotalWorkingHrs";
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
              WorkingHrs.map((item) => (
                <div className="hrs">
                  <span>
                    <input type="checkbox" onClick={onChangeLogin}></input>
                  </span>
                  <span>{item.time}</span>
                </div>
              ))
            )}
          </div>
          <div className="border"></div>
        </>
      ))}
    </div>
  );
};

export default CalenderCompo;
