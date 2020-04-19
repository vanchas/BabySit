import babySittersReducer from './babySittersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    babySitters: babySittersReducer
});

export default rootReducer;
