import React from 'react';
import {render} from 'react-dom';
import * as stores from './stores';
import {Provider} from 'mobx-react';
import {HashRouter as Router} from 'react-router-dom';
import App from './pages';
import 'antd/dist/antd.css';
import './index.css';

render(
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
