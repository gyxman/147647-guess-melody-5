import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import FailTries from "../fail-tries/fail-tries";
import ResultSuccess from "../result-success/result-success";
import GameScreen from "../game-screen/game-screen";
import artistQuestionProp from "../artist-question-screen/artist-question.prop";
import genreQuestionProp from "../genre-question-screen/genre-question.prop";

const App = (props) => {
  const {errorsCount, questions} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact
        path="/"
        render={({history}) => (
          <WelcomeScreen
            onPlayButtonClick={() => history.push(`/game`)}
            errorsCount={errorsCount}
          />
        )}
      />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/result" exact>
        <ResultSuccess />
      </Route>
      <Route path="/lose" exact>
        <FailTries />
      </Route>
      <Route exact path="/game">
        <GameScreen
          errorsCount={errorsCount}
          questions={questions}
        />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

export default App;
