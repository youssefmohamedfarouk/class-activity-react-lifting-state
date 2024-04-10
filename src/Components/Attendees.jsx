import Attendee from "./Attendee";

export default function Attendees() {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee />
          ))}
        </div>
      ) : null}
    </>
  );
}
