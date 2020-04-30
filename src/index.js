import React from 'react';
import {render} from 'react-dom';
import * as stores from './stores';
import {Provider} from 'mobx-react';
import {HashRouter as Router,Route} from 'react-router-dom';
import App from './pages';
import 'antd/dist/antd.css';
import './index.css';

render(
    <Provider {...stores}>
        <Router>
            <Route path='/' render={(routerProps)=>{
                return <App {...routerProps}/>
            }}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
