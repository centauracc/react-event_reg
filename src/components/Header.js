import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

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
