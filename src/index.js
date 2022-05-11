import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </AppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
