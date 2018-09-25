import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/ActionTypes";

const ENTER_KEY = 13;

class SearchField extends Component {
  constructor(props) {
      super(props);

      this.state = { city: "" };

      this.handlerButtonClick = this.handlerButtonClick.bind(this);
      this.handlerEnterKeyDown = this.handlerEnterKeyDown.bind(this);
      this.handlerCitySetter = this.handlerCitySetter.bind(this);
  }

  handlerButtonClick (event) {
    this.setState({ city: "" });
    this.props.fetchWeather(this.state.city);
  }

  handlerCitySetter (event) {
    this.setState({ city: event.target.value });
  }

  handlerEnterKeyDown (event) {
    if (event.keyCode !== ENTER_KEY) {
      return
    }

    if (event.target.value.length > 0) {
      console.log(event.target.value);
      this.setState({ city: event.target.value });
      this.props.fetchWeather(this.state.city);
    }
  }

  render() {
    //console.log(this.props)
    return (
      <Fragment>
        <input
          id="citySearchField"
          type="text"
          defaultValue = {this.state.city}
          onKeyDown = {this.handlerEnterKeyDown}
          onChange = {this.handlerCitySetter}
        />
        <button
          id="citySender"
          onClick={this.handlerButtonClick}>
          Send
        </button>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchField);
