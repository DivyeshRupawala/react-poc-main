import React from 'react';

import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
function Home() {
    let navigate = useNavigate();
    var defaultLink = "/";
    defaultLink += encodeURIComponent("Default Workspace") + "/" + encodeURIComponent("Default Page") + "/" + encodeURIComponent("Default View");
    navigate(defaultLink);
    return (
        <h3>This is App</h3>
    );
}

export default Home;