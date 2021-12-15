import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        {String(window.localStorage.getItem("jwt_access_token")?.toString()) !==
          '""' &&
        String(
          window.localStorage.getItem("jwt_access_token")?.toString().trim()
        ) !== "undefined" ? (
          <>
            <Redirect to="/home" />
            <Route path="/home" component={Home} />
          </>
        ) : (
          <>
            <Redirect to="/" />
            <Route path="/" component={SignIn} />
          </>
        )}
      </Router>
    </>
  );
};

export default Routes;
