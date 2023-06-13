import React from "react";
import ReactDOM from "react-dom";

/* REDUX */
import { Provider } from "react-redux";


/* COMPONENTS */
import App from "./App";
import reportWebVitals from "./reportWebVitals";


/* STYLING */
import "./index.css";
import "./bootstrap.min.css";
import store from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
