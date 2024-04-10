import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";

export default function NewEventForm({ events, setEvents }) {
  const [selectOption, setSelectOption] = useState("");

  function handleSelectChange(e) {
    setSelectOption(e.target.value);
  }

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  // WORKS (ideally)
  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }

  // WORKS (ideally)
  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  // WORKS (ideally)
  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }

  // WORKS (ideally)
  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a new event</h3>
      <label htmlFor="name">Event name:</label>
      <input
        type="text"
        id="name"
        onChange={handleTextChange}
        value={newEvent.name}
      />

      <label htmlFor="organizer">Organizer:</label>
      <input
        type="text"
        id="organizer"
        onChange={handleTextChange}
        value={newEvent.organizer}
      />

      <label htmlFor="eventImage">Event image:</label>
      <input
        type="text"
        id="eventImage"
        onChange={handleTextChange}
        value={newEvent.eventImage}
      />
      <label htmlFor="eventType">Event type:</label>
      <select id="eventType" onChange={handleSelectChange}>
        <option value=""></option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Intramural Sport">Intramural Sport</option>
        <option value="Watch Party">Watch Party</option>
        <option value="wedding">Wedding</option>
      </select>
      <br />
      <input type="submit" />
    </form>
  );
}
