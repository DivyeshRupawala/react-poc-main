import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useSearchParams, useNavigate, useLocation, useParams } from "react-router-dom";


function App() {

    let { wsName, pName, vName } = useParams();
    if (!pName) {
        pName = "defaultPage";
    }
    if (!vName) {
        vName = "defaultView";
    }
    let navigate = useNavigate();
    var link;
    if (wsName) {

        link = "/";
        link += encodeURIComponent(wsName) + "/" + encodeURIComponent(pName) + "/" + encodeURIComponent(vName);
    } else {
        //get from history
        //if not available
        link = "/";
        link += encodeURIComponent("Workspace1") + "/" + encodeURIComponent("SM Widgets");

    }
    useEffect(() => {
        if (link) {
            return navigate(link);
        }
    }, [link]);
    return (
        <h3>This is App</h3>
    ); 
}


export default App;
