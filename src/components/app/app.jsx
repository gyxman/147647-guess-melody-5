import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "../welcome/welcome";
import Login from "../login/login";
import FailTries from "../fail-tries/fail-tries";
import ResultSuccess from "../result-success/result-success";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";

const App = (props) => {
  const {errorCount} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/">
        <Welcome errorCount={errorCount} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/result">
        <ResultSuccess />
      </Route>
      <Route path="/lose">
        <FailTries />
      </Route>
      <Route path="/dev-artist">
        <QuestionArtist />
      </Route>
      <Route path="/dev-genre">
        <QuestionGenre />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
