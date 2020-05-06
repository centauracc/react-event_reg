import React from "react";
import moment from "moment";
import "./Event.css";
// import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function Event({ _id, title, date, venue, description, deleteEvent }) {
  return (
    <div>
      <article className="event-item">
        <div className="event-icons">
          <span>
            <EditIcon htmlColor="#3f51b5" />
          </span>
          <span>&nbsp;</span>
          <span onClick={() => deleteEvent()}>
            <DeleteIcon htmlColor="#3f51b5" />
          </span>
        </div>
        <div className="text-event-date">
          {moment(date).format("ddd, MMM D, YYYY, hh:mm A")}
        </div>
        <div className="text-event-title">{title}</div>
        {/* <div>Address: {venue.address}</div>
        <div>Postal: {venue.postalCode}</div>
        <div>Description: {description}</div> */}
        <div>&nbsp;</div>
        {/* <div className="event-find-out">
          <Button color="primary" size="small">
            Learn more
          </Button>
        </div> */}
      </article>
    </div>
  );
}

export default Event;
