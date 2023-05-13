import React from "react";

const CalenderCompo = ({ dates, todaysDate }) => {
  return (
    <div>
      {dates.map((item) => (
        <>
          <div className="rowWrapper">
            <div className="dateday">
              <span>{item.day}</span>

              <span>{item.dateString}</span>
            </div>
            {new Date(item.dateString).getTime() <
            new Date(todaysDate).getTime() ? (
              <span>Past</span>
            ) : (
              <div className="hrs">8pm</div>
            )}
          </div>
          <div className="border"></div>
        </>
      ))}
    </div>
  );
};

export default CalenderCompo;
