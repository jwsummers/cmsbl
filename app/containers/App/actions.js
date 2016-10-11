/*
 * App Actions
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

/**
 * This action starts the request saga for logins
 *
 * @return {object} An action object with a type of LOGIN_REQUEST
 */
export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

/**
 * Dispatched on a successful login by the request saga
 *
 * @param  {object} profile The user profile data
 * @param  {string} idToken The login token
 *
 * @return {object}      An action object with a type of LOGIN_SUCCESS and user info
 */
export function loginSuccess(profile, idToken) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    idToken,
  };
}

/**
 * Dispatched when logging in fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOGIN_FAILURE passing the error
 */
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

/**
 * Dispatched when logging out
 *
 * @return {object}       An action object with a type of LOGOUT passing the error
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}
