import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: registration => {
    alert('Updated to newest version!');
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }
});

/* The latest version of the ServiceWorker.ts register()function accepts a config object with a callback function where we can handle upgrading. If we post a message SKIP_WAITING this tells the service worker to stop waiting and to go ahead and load the new content after the next refresh.

The reason this postMessage function works is because under the hood CRA is using workbox-webpack-plugin which includes a SKIP_WAITING listener. */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
