// import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/index.scss';
// import 'bootstrap/dist/js/bootstrap'; not necessary with reactstrap!

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
