import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/Login";
import SignupComponent from "./signup/SignUp";
import DashboardComponent from "./dashBoard/dashBoard";

const firebase = require("firebase");

require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyDFULeFL5ER8NV0-lhxYvbuZ8VjV0fkT7E",
  authDomain: "chat-application-ab161.firebaseapp.com",
  databaseURL: "https://chat-application-ab161.firebaseio.com",
  projectId: "chat-application-ab161",
  storageBucket: "chat-application-ab161.appspot.com",
  messagingSenderId: "860861760533",
  appId: "1:860861760533:web:9ad9a8b8d9025f038d7a1c",
  measurementId: "G-VQNSYC20PG"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
