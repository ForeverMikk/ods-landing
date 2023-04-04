import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import App from './App';
import './index.css';
import 'reactjs-popup/dist/index.css';
import Home from './components/Home/Home';
import TermsConditions from './components/TermsConditions/TermsConditions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
