// Use this import to get mock state data for testing
// i.e., let state = getMockState.withManyImages();
// import { getMockState } from '../../tests/fixtures/getMockState.js';

// A basic store to handle state manipulation
const createStore = (reducer) => {
  let state = [];
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({});

  return { getState, dispatch, subscribe };
};

export default createStore;
