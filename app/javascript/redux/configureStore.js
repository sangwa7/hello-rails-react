import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: 'Hello Reviewer',
};

function rootReducer(state, action) {
  switch (action.type) {
    case 'SET_MESSAGE_SUCCESS':
      return {
        greeting: action.json.greeting,
      };
    default:
      return state;
  }
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
