import React from "react";
import api from "../utils/api";
import "./Event.css";
import moment from "moment";
import EventEditScreen from "./EventEditScreen";

class EventEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      year: "",
      month: "",
      date: "",
      hour: "",
      minute: "",
      address: "",
      postalCode: "",
      description: "",
      errorMessage: null,
      changesSaved: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      _id: this.props.event._id,
      title: this.props.event.title,
      year: moment(this.props.event.date).format("YYYY"),
      month: moment(this.props.event.date).format("MM"),
      date: moment(this.props.event.date).format("DD"),
      hour: moment(this.props.event.date).format("HH"),
      minute: moment(this.props.event.date).format("mm"),
      address: this.props.event.venue.address,
      postalCode: this.props.event.venue.postalCode,
      description: this.props.event.description,
    });
  };

  saveChangesToEventViaApi = () => {
    const constructedDate = new Date(
      parseInt(this.state.year),
      parseInt(this.state.month) - 1,
      parseInt(this.state.date),
      parseInt(this.state.hour),
      parseInt(this.state.minute)
    );

    const payload = {
      title: this.state.title,
      date: constructedDate,
      venue: {
        address: this.state.address,
        postalCode: this.state.postalCode,
      },
      description: this.state.description,
    };

    const headers = { "content-type": "application/json" };

    api
      .put(`/events/${this.state._id}`, payload, { headers: headers })
      .then((response) => {
        this.setState({ changesSaved: true });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Cannot save changes" });
      });
  };

  handleSave = () => {
    this.saveChangesToEventViaApi();
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState(() => ({ [name]: value }));
  };

  displayEventEdit = () => {
    return this.state.changesSaved ? (
      window.location.reload()
    ) : (
      <EventEditScreen
        key={this.props.event._id}
        event={this.props.event}
        handleSave={this.handleSave}
        handleChange={this.handleChange}
      />
    );
  };

  render() {
    return <div>{this.displayEventEdit()}</div>;
  }
}

export default EventEdit;
