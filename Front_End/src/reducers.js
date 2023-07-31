// reducers.js

import { combineReducers } from 'redux';
// Import all your individual reducers here
// For example:
// import userReducer from './userReducer';
// import someOtherReducer from './someOtherReducer';

// Combine all your reducers into a single root reducer
const rootReducer = combineReducers({
  // user: userReducer,
  // someOther: someOtherReducer,
});

export default rootReducer;
