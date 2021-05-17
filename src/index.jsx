// import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import 'bootstrap/dist/js/bootstrap';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
