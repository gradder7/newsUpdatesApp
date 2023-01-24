import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          {/* <News pageSize={5} country={"in"} category={"sports"} /> */}

          <Routes>
            {/* here the problem is we are mounting the same component and the component is not remounting. 
            but we want to re mount the component with updated props,
            to solve this problem we will provide keys to the component
            */}
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={5}
                  country={"in"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={5}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={5}
                  country={"in"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={5}
                  country={"in"}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={5}
                  country={"in"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={5}
                  country={"in"}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
