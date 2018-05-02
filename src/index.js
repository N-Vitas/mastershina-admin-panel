import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'

import App from './containers/App/App.jsx';
import configureStore from './store';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

const store = configureStore();

ReactDOM.render((
    <ReduxProvider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/" name="Home" component={App}/>
            </Switch>
        </HashRouter>
    </ReduxProvider>
),document.getElementById('root'));
