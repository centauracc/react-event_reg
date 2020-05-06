import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="title">
            Upcoming Events
          </Typography>
          <Link to="/login">
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
