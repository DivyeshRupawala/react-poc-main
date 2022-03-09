import React from 'react';
import {
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import { SidebarKiboData } from './SidebarKiboData';
function WorkspaceLayout() {
  let { wsName } = useParams();
  let workspace = SidebarKiboData.find((element) => {
    return element.Name === wsName;
  })
  return (
       <>
        <div 
        style={{ display: "flex", height: "100%", overflow:"scroll initial"}}
        >
          <nav className= 'left-column'>
            <ul>
            { workspace.Pages.map((item, index) => { 
                  return <>
                  <li key={index} className="nav-text">
                        <Link to={item.Name }>
                          <i className={'fa fa-' + item.Image}></i>
                          <span>{item.Title}</span>
                      </Link>
                  </li>
                </>
                })}      
                
            </ul>
        </nav>
          <div>
            <Outlet />
          </div>
      </div>
  </> 
);

}
export default WorkspaceLayout;
