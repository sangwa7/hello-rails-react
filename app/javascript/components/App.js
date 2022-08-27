import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/configureStore';
import PropTypes from 'prop-types';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting greeting="Insha`Allah" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
