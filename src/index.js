import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import questions from "./mocks/questions";
import settings from "./mocks/settings";

ReactDOM.render(
    <App errorsCount={settings.errorsCount} questions={questions} />,
    document.getElementById(`root`)
);
