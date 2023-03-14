import './index.css';
import './i18n';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
