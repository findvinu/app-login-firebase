import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./index.css";

const basename = import.meta.env.REACT_APP_BASE_URL || "/";

console.log("basename", basename);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename={basename}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
