import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Middleware between action & reducer
import './index.css';
import WeatherApp from './components/WeatherApp';
import mainReducer from './components/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  mainReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
//any JS and CSS files must be inside src folder or Webpack won’t see them
