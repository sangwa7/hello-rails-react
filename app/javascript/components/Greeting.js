import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

const SET_MESSAGE = 'SET_MESSAGE';
const SET_MESSAGE_SUCCESS = 'SET_MESSAGE_SUCCESS';

function setMessage() {
  return (dispatch) => {
    dispatch({ type: SET_MESSAGE });
    return fetch('/v1/messages')
      .then((res) => res.json())
      .then((json) => {
        dispatch(setMessageSuccess(json));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

function setMessageSuccess(json) {
  return {
    type: SET_MESSAGE_SUCCESS,
    json,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.greeting}</h1>
        <button onClick={this.props.setMessage}>Get Greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { setMessage };

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
