import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import babySitters from '../babysitters.json';

const preloadedState  = { babySitters };

const store = createStore(
  rootReducer,
  preloadedState 
);

export default store;


