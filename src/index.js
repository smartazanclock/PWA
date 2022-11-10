import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();


