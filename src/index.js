import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './Stored/Store';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store = {Store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
