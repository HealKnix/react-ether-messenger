import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { setThemeColor } from './utils/setThemeColor.ts';

setThemeColor(
  localStorage.getItem('accent-color-theme') ?? 'default-accent-color',
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
