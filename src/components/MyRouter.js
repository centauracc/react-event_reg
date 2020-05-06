import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventList from "./EventList";
import Login from "./Login";
import Header from "./Header";

class MyRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={EventList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default MyRouter;
