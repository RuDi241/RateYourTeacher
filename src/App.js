import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CommentsPage from "./components/CommentsPage";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/comments" component={CommentsPage} />
    </div>
  );
}

export default App;
