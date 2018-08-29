import React from "react";
import axios from "axios";
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hi: "" };
  }
  componentDidMount() {
    axios
      .get("/get-locations?term=food&location=90005")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  render() {
    return <h1> Test </h1>;
  }
}
