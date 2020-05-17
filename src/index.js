import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './shared/redux/configureStore'

import './styles/app.scss';
import App from './components/App';

const rootElement = document.getElementById('root')
const store = configureStore()

const renderApp = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  )
}

renderApp(App)
