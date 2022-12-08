import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from '../src/Components/App/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
