import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router';
import { Provider } from 'react-redux';
import store from './redux';
import './config';
import './common/stylus/index.styl';
import './common/stylus/mixin.styl';

ReactDOM.render(
<Provider store = {store}>
  <Router/>
</Provider>, document.getElementById('root'));
