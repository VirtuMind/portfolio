import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './style.css';
import './responsive.css';

import 'animate.css';

import 'react-slideshow-image/dist/styles.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

// import i18n (needs to be bundled)
import '../utils/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
