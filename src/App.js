import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import CommentsPage from "./components/pages/CommentsPage";
import AboutPage from "./components/pages/AboutPage";
import "./App.scss";
import { signInWithGoogle } from "./firebase";
import Header from "./components/main/header/Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/comments" component={CommentsPage} />
        <Route exact path="/about" component={AboutPage} />
        <button onClick={signInWithGoogle}>Sign up with google</button>
      </div>
    );
  }
}

export default App;
