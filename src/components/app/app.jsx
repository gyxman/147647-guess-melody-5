import React from "react";
import PropTypes from "prop-types";
import Welcome from "../welcome/welcome";

const App = (props) => {
  const {errorCount} = props;

  return <Welcome errorCount={errorCount} />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
