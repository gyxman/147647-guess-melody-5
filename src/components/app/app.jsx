import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Login from "../login/login";
import FailTries from "../fail-tries/fail-tries";
import ResultSuccess from "../result-success/result-success";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

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
      <Route path="/dev-artist" exact>
        <ArtistQuestionScreen
          question={secondQuestion}
          onAnswer={() => {}}
        />
      </Route>
      <Route path="/dev-genre" exact>
        <GenreQuestionScreen
          question={firstQuestion}
          onAnswer={() => {}}
        />
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
  questions: PropTypes.array.isRequired
};

export default App;
