import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter } from 'react-router-dom';
import {
    Route,
    Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import WorkspaceLayout from './components/WorkspaceLayout';
import View from './components/View';

ReactDOM.render(
    <HashRouter>
        <div className="App">
            <header className="App-header">
            </header>

            <Navbar />
            <div className="App-intro">
                <Routes>
                    <Route exact path="/" element={
                        <App />} />
                    <Route path="/:wsName/" element={<WorkspaceLayout />} >
                        <Route path=":pName" element={<View />} >
                            <Route path=":vName" element={<View />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </div>
    </HashRouter>
    , document.getElementById('root')
);
registerServiceWorker();
