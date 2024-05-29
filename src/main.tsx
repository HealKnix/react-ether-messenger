import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

document
  .querySelector('body')
  ?.setAttribute(
    'style',
    `--accent-color: ${localStorage.getItem('accent-color-theme') ?? '#5643D0'}; --text-accent-color: color-mix(in srgb, ${localStorage.getItem('accent-color-theme') ?? '#5643D0'} 10%, white 100%)`,
  );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
