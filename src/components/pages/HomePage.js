import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../home/homePageWelcome/Welcome";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <Welcome />
      </div>
    );
  }
}

export default HomePage;
