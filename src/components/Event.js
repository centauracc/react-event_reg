import React from "react";
import moment from "moment";
import "./Event.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Event({ event, deleteEvent, editEvent }) {
  return (
    <div>
      <article className="event-item">
        <div className="event-icons">
          <span onClick={() => editEvent()}>
            <EditIcon htmlColor="#3f51b5" />
          </span>
          <span>&nbsp;</span>
          <span onClick={() => deleteEvent()}>
            <DeleteIcon htmlColor="#3f51b5" />
          </span>
        </div>
        <div className="text-event-date">
          {moment(event.date).format("ddd, MMM D, YYYY, hh:mm A")}
        </div>
        <div className="text-event-title">{event.title}</div>
        <div>&nbsp;</div>
      </article>
    </div>
  );
}

export default Event;
