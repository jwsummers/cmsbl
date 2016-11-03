/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Button from 'react-mdl/lib/Button';

import messages from './messages';
import { createStructuredSelector } from 'reselect';

import {
  selectError,
  selectIdToken,
  selectIsLoggingIn,
  selectProfile,
} from 'containers/App/selectors';

import { loginRequest, logout } from '../App/actions';

import { FormattedMessage } from 'react-intl';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'The Home Page' },
          ]}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <p>
          {
            !this.props.idToken ?
              <Button onClick={this.props.login} raised colored ripple>Login</Button>
            :
              <Button onClick={this.props.logout}>Logout</Button>
          }
        </p>
        <ol>
          <li>environment - {`${ENVIRONMENT}`}</li>
          <li>isLoggingIn - {`${this.props.isLoggingIn}`}</li>
          <li>idToken - {`${this.props.idToken}`}</li>
          <li>profile - {`${this.props.profile}`}</li>
          <li>error - {`${this.props.error}`}</li>
        </ol>
      </div>
    );
  }
}

HomePage.propTypes = {
  isLoggingIn: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  profile: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
  idToken: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    login: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loginRequest());
    },
    logout: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(logout());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  error: selectError(),
  idToken: selectIdToken(),
  isLoggingIn: selectIsLoggingIn(),
  profile: selectProfile(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
