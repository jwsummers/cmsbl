/*
 * AppReducer
 *
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: false,
  idToken: false,
  isLoggingIn: false,
  profile: false,
});

/* TODO: Load from local storage
function initializeState() {
  const storedAuthData = getStoredAuthData();
  return Object.assign({}, initialState, storedAuthData);
}
*/

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isLoggingIn', true)
        .set('error', false);
    case LOGIN_SUCCESS:
      return state
        .set('isLoggingIn', false)
        .set('error', false)
        .set('profile', action.profile)
        .set('idToken', action.idToken);
    case LOGIN_FAILURE:
      return state
        .set('error', action.error)
        .set('isLoggingIn', false)
        .set('profile', false)
        .set('idToken', false);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default appReducer;
