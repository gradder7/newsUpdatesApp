import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={5} />
      </>
    );
  }
}
