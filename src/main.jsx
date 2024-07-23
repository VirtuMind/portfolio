import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './style.css';
import './responsive.css';

// import i18n (needs to be bundled)
import '../utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
