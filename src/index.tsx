import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Themeconfig } from './config/theme.config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Themeconfig>
      <App />

    </Themeconfig>
  </React.StrictMode>
);

reportWebVitals();
