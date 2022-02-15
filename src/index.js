import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import {
    Route,
    Link,
    Routes,
    Navigate
} from 'react-router-dom';

import Navbar from './components/Navbar';
import View from './components/View';
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <div className="App">
            <header className="App-header">
            </header>

            <Navbar />
            <div className="App-intro">
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/:wsName/" element={<App />} />
                    <Route path="/:wsName/:pName" element={<App />} />
                    <Route path="/:wsName/:pName/:vName" element={<View />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </div>
        </div>
    </HashRouter>
    , document.getElementById('root')
);
registerServiceWorker();
