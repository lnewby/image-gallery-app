import { getMockState } from '../../tests/fixtures/getMockState.js';

const createStore = (reducer) => {
  let state = getMockState.withManyImages();
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    console.log(`dispatching: ${JSON.stringify(action)}`);
    state = reducer(state, action);

    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    console.log(`subscribing: ${listener}`);
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({});

  return { getState, dispatch, subscribe };
};

export default createStore;
