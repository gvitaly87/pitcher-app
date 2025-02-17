import "./LastPitchCell.css";
import { subtractDates } from "../utils/math";
import { formatDate } from "../utils/formatters";

export default function LastPitchCell(props: { lastPitched: Date }) {
  const today = new Date();
  const days = subtractDates(today, props.lastPitched);

  return (
    <div className="last-pitched-cell">
      <div className="days-since">{days}</div>
      <div className="labels">
        <div className="days-since-label">days ago</div>
        <div className="date-pitched">{formatDate(props.lastPitched)}</div>
      </div>
    </div>
  );
}
