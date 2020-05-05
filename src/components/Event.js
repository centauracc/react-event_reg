import React from "react";
import moment from "moment";

function Event({ title, date, venue, description }) {
  return (
    <div>
      <div>
        <label for="title">{title}</label>
      </div>
      <div>
        <label for="date">
          {moment(date).format("ddd, MMM D, YYYY, hh:mm A")}
        </label>
      </div>
      <div>
        <label for="venue.address">{venue.address}</label>
      </div>
      <div>
        <label for="venue.postalCode">{venue.postalCode}</label>
      </div>
      <div>
        <label for="description">{description}</label>
      </div>
      <div>&nbsp;</div>
    </div>
  );
}

export default Event;
