import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customCalendar.css";

function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);

  const onClickDay = (value) => {
    setSelectedDate(value);
  };

  const onHoverDay = (value) => {
    setHoveredDate(value);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onClickDay={onClickDay}
        onActiveStartDateChange={() => setHoveredDate(null)}
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        tileClassName={({ date, view }) =>
          view === "month" &&
          (hoveredDate && date.getTime() === hoveredDate.getTime()
            ? "hovered"
            : selectedDate && date.getTime() === selectedDate.getTime()
            ? "selected"
            : null)
        }
        tileContent={({ date, view }) =>
          view === "month" && (
            <div
              onMouseEnter={() => onHoverDay(date)}
              onMouseLeave={() => setHoveredDate(null)}
            ></div>
          )
        }
      />
    </div>
  );
}
export default CustomCalendar;
