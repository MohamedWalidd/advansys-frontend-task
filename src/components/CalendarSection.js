import Icon from "./Icon";
import "./calendar.css";

function CalendarSection({ date }) {
  return (
    <div className="calendar-section">
      <div className="date-container">
        <Icon name="calendarIcon" width="12px" height="12px" />
        <span style={{ color: "#BA1319" }} className="date">
          {date}
        </span>
      </div>
      <Icon name="dropdownIcon" width="16px" height="16px" />
    </div>
  );
}

export default CalendarSection;
