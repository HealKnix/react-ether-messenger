import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Modal from './components/Modal/Modal.tsx';
import App from './pages/App/App.tsx';
import { setThemeColor } from './utils/setThemeColor.ts';

setThemeColor(localStorage.getItem('accent-color-theme'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Modal />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
