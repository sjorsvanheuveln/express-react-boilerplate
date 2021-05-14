// import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
