import React from "react";
import { TextField, Button } from "@material-ui/core";
import moment from "moment";
import "./Event.css";

function EventEditScreen({ event, handleSave, handleChange }) {
  const regularWidth = 300;
  const shortWidth = 80;

  return (
    <div>
      <article className="event-item">
        <div>
          <TextField
            margin="normal"
            label="Id"
            value={event._id}
            style={{ width: regularWidth }}
            disabled
          />
        </div>
        <div>
          <TextField
            margin="normal"
            label="Title"
            defaultValue={event.title.trim()}
            style={{ width: regularWidth }}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <span>
            <TextField
              margin="normal"
              label="Day"
              defaultValue={moment(event.date).format("DD")}
              style={{ width: shortWidth }}
              name="date"
              onChange={handleChange}
            />
          </span>
          <span>
            <TextField
              margin="normal"
              label="Month"
              style={{ width: shortWidth }}
              defaultValue={moment(event.date).format("MM")}
              name="month"
              onChange={handleChange}
            />
          </span>
          <span>
            <TextField
              margin="normal"
              label="Year"
              style={{ width: shortWidth }}
              defaultValue={moment(event.date).format("YYYY")}
              name="year"
              onChange={handleChange}
            />
          </span>
          <span>
            <TextField
              margin="normal"
              label="Hour"
              style={{ width: shortWidth }}
              defaultValue={moment(event.date).format("HH")}
              name="hour"
              onChange={handleChange}
            />
          </span>
          <span>
            <TextField
              margin="normal"
              label="Minute"
              style={{ width: shortWidth }}
              defaultValue={moment(event.date).format("mm")}
              name="minute"
              onChange={handleChange}
            />
          </span>
        </div>
        <div>
          <TextField
            margin="normal"
            label="Address"
            defaultValue={event.venue.address}
            style={{ width: regularWidth }}
            name="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            margin="normal"
            label="Postal Code"
            defaultValue={event.venue.postalCode}
            style={{ width: regularWidth }}
            name="postalCode"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            margin="normal"
            label="Description"
            defaultValue={event.description}
            style={{ width: regularWidth }}
            name="description"
            onChange={handleChange}
          />
        </div>
        <br />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </article>
    </div>
  );
}

export default EventEditScreen;
