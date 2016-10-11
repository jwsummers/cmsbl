/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
);

const selectIdToken = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('idToken')
);

const selectIsLoggingIn = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isLoggingIn')
);

const selectProfile = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('profile')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectError,
  selectIdToken,
  selectIsLoggingIn,
  selectProfile,
  selectLocationState,
};
