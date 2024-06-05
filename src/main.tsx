import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.tsx';
import './index.scss';
import { setThemeColor } from './utils/setThemeColor.ts';
import Modal from './components/Modal/Modal.tsx';
import { BrowserRouter } from 'react-router-dom';

setThemeColor(localStorage.getItem('accent-color-theme'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Modal />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
