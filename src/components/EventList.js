import React from "react";
import api from "../utils/api";
import Event from "./Event";
import EventEdit from "./EventEdit";

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      errorMessage: null,
      eventIdToModify: null,
    };
  }

  componentDidMount = () => {
    this.fetchEventsViaApi();
  };

  componentWillUnmount = () => {
    this.setState({ eventIdToModify: null });
  };

  displayEvents = () => {
    return this.state.events.map((event) => {
      const deleteEvent = () => {
        const filteredEvents = this.state.events.filter((eventFilter) => {
          return eventFilter._id !== event._id;
        });
        this.setState({ events: [...filteredEvents] });
        this.removeEventViaApi(event._id);
      };

      const editEvent = () => {
        this.setState({ eventIdToModify: event._id });
      };

      return this.state.eventIdToModify === event._id ? (
        <EventEdit key={event._id} event={event} />
      ) : (
        <Event
          key={event._id}
          event={event}
          deleteEvent={deleteEvent}
          editEvent={editEvent}
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
        //todo
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
