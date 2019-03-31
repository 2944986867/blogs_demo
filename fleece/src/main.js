import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept(); // 热更新