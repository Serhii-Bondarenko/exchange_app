import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style/index.css';
import App from './App';
import store from './store/store.config';

ReactDOM.render(
    <Provider store={ store }>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);