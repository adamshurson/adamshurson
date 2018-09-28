import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './tailwind.css';
import './index.css';
import '../node_modules/animate.css/animate.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(fas);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
