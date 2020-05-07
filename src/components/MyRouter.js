import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventList from "./EventList";
import Login from "./Login";
import Header from "./Header";
import EventEdit from "./EventEdit";

class MyRouter extends React.Component {
  render() {
    const emptyEvent = {
      _id: "",
      title: "",
      date: "",
      venue: { address: "", postalCode: "" },
      description: "",
    };

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/create"
              render={(props) => <EventEdit key={"new"} event={emptyEvent} />}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={EventList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default MyRouter;
