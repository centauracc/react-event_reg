import React from "react";
import axios from "axios";
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
      return (
        <Event
          key={event._id}
          title={event.title}
          date={event.date}
          venue={event.venue}
          description={event.description}
        />
      );
    });
  };

  fetchEventsViaApi = () => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        this.setState({
          events: response.data,
        });
        console.log("response.data", response.data);
      })
      .catch((err) => {
        console.error(err);
        this.setState({ errorMessage: "Cannot fetch events via API" });
      });
  };

  render() {
    console.log("this.state.events", this.state.events);
    return (
      <div>
        <div>List of events</div>
        <div>{this.displayEvents()}</div>
      </div>
    );
  }
}

export default EventList;
