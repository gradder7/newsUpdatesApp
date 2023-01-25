import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 15;
  // if we use any REACT__APP in any local env than we get access of that env in our react app
  // apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  // category = {
  //   general: {
  //     name: "general",
  //     color: "success",
  //   },
  //   business: {
  //     name: "business",
  //     color: "danger",
  //   },
  // };

  render() {
    // console.log(this.category.general.name)
    return (
      <>
        <Router>
          <Navbar />
          {/* <News setProgress={this.state.setProgress}  pageSize={this.pageSize} country={"in"} category={"sports"} /> */}

          {/* loading bar npm*/}
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />

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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="home"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
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
