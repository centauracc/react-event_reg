import React from "react";
import api from "../utils/api";
import Event from "./Event";

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      errorMessage: null,
    };
  }

  componentDidMount = () => {
    this.fetchEventsViaApi();
  };

  displayEvents = () => {
    return this.state.events.map((event) => {
      const deleteEvent = () => {
        const filteredEvents = this.state.events.filter((eventFilter) => {
          this.setState({ eventIdToRemove: event._id });
          return eventFilter._id !== event._id;
        });
        this.setState({ events: [...filteredEvents] });
        this.removeEventViaApi(event._id);
      };

      return (
        <Event
          key={event._id}
          id={event._id}
          title={event.title}
          date={event.date}
          venue={event.venue}
          description={event.description}
          deleteEvent={deleteEvent}
        />
      );
    });
  };

  fetchEventsViaApi = () => {
    api
      .get("/events")
      .then((response) => {
        this.setState({
          events: response.data,
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: "Cannot fetch events via API" });
      });
  };

  removeEventViaApi = (id) => {
    api
      .delete(`/events/${id}`)
      .then((response) => {
        console.log("response.data:", response.data);
      })
      .catch((err) => {
        this.setState({ errorMessage: "Cannot remove event via API" });
      });
  };

  render() {
    return (
      <div>
        <div>{this.displayEvents()}</div>
      </div>
    );
  }
}

export default EventList;
