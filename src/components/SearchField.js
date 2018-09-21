import React, { Component, Fragment } from 'react';

class SearchField extends Component {

  render() {
    return (
      <Fragment>
        <input type="text" />
        <button
          id="cityInput">
          Send
        </button>
      </Fragment>
    )
  }
}

export default SearchField;
