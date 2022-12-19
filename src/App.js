import React, { Component } from "react";
import { connect } from "react-redux";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED } from "./constants";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.requestData();
  }
  render() {
    console.log(">>>state", this.props.apiResponseStoredInReduxState);
    return (
      <div className="App">
        <ul>
          {!this.props.apiResponseStoredInReduxState.isPending ? (
            this.props.apiResponseStoredInReduxState.data.map((item, index) => (
              <li key={index}>
                App id: {item.app_id} Clicks: {item.clicks}
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiResponseStoredInReduxState: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestData: () => {
      dispatch({ type: REQUEST_PENDING });
      fetch(
        "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03"
      )
        .then((res) => res.json())
        .then((data) => dispatch({ type: REQUEST_SUCCESS, payload: data }))
        .catch((error) => dispatch({ type: REQUEST_FAILED, payload: error }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
