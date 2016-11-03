/**
 * Gets the repositories of the user from Github
 */

import Auth0Lock from 'auth0-lock';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginFailure } from 'containers/App/actions';

/**
 * Github repos request/response handler
 */
export function* loginRequest() {
  const lock = new Auth0Lock('p2C9MVQtRjdbT7sRsBXOLsfrMJnLJucH', 'cmsbl.auth0.com', { auth: { redirect: false } });
  const showLock = () =>
    new Promise((resolve, reject) => {
      lock.on('hide', () => reject('Lock closed'));
      lock.on('authenticated', (authResult) => {
        lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            // Handle error
            reject(error);
          }

          resolve({ profile, token: authResult.idToken });
        });
      });
      lock.show();
    });

  try {
    const { profile, token } = yield call(showLock);

    yield put(loginSuccess(profile, token));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* loginRequestWatcher() {
  while (yield take(LOGIN_REQUEST)) {
    yield call(loginRequest);
  }
}

export function* loginRequestSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(loginRequestWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loginRequestSaga,
];
