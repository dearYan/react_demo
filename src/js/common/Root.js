import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'

// <Router history={history} routes={routes} />
export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
          <div>Hello word!</div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
