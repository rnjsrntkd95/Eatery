import React, { Component } from 'react';
import Login from './Login';
import Comments from './List';

export default class SubApp extends Component {
  state = {
    user: undefined,
  };

  onLoggedIn = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return user ? (
      <Comments user={user} />
    ) : (
      <Login onLoggedIn={this.onLoggedIn} />
    );
  }
}
