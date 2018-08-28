import React from "react";
import { Link } from "react-router-dom";

export default class Test extends React.Component {
  render() {
    return (
      <h1>
        Hey, <Link to="/landing">Go to Landing</Link>!
      </h1>
    );
  }
}
