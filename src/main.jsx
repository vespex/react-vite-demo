import React from 'react';
import ReactDOM from 'react-dom/client';
import Router, { routes } from './router/index.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router routes={routes} />
);
