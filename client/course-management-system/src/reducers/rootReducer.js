import { combineReducers } from 'redux';

import courseReducer from './courseReducer';
import assigmentReducer from './assigmentReducer';


let rootReducer = combineReducers({
     courses: courseReducer,
     assigments: assigmentReducer,
});

export default rootReducer;