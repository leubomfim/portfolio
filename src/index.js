import React from 'react';
import ReactDOM from 'react-dom/client';
import { PagesRoutes } from './routes';
import { GlobalStyles } from './constants/styles/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PagesRoutes />
    <GlobalStyles />
  </>,
);
