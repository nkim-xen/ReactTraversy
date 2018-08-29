import React from "react";
import axios from "axios";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hi: "" };
  }
  componentDidMount() {
    axios
      .post("http://xenmedia.net/filter?filter=web")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  render() {
    return <h1> Register </h1>;
  }
}
