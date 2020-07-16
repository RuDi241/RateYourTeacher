import React from "react";
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
      <div style={{ margin: "80px 100px" }}>
        <Welcome />
      </div>
    );
  }
}

export default HomePage;
