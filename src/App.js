import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import CommentsPage from "./components/pages/CommentsPage";
import AboutPage from "./components/pages/AboutPage";
<<<<<<< HEAD
import "./assets/styles/App.scss";
=======
import {signInWithGoogle} from './firebase'
>>>>>>> d145cc89e95b0f3bab6297b7c4fc47cd4905522b
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/comments" component={CommentsPage} />
        <Route exact path="/about" component={AboutPage} />
<<<<<<< HEAD
=======
        <button onClick={signInWithGoogle}>Sign up with google</button>
>>>>>>> d145cc89e95b0f3bab6297b7c4fc47cd4905522b
      </div>
    );
  }
}

export default App;
