import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { SidebarKiboData } from './SidebarKiboData';
import Workspace from './Workspace';
import { useNavigate } from "react-router-dom";
import { publish } from "../utils/PubSub"


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    let navigate = useNavigate();
    const goBack = () => navigate(-1);
    const publishEvent = () => {
        publish("header-refresh", { dummyData: [1,2,3,4]});          
    }
    
  return (
    <>
        <IconContext.Provider value={{color:'#fff'}}>
       
        <div className='ws-navbar'>
            <Link to="#" className="nav-icon menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <Link to="#" className="nav-icon back">
                <FaIcons.FaAngleLeft onClick={goBack} />
            </Link>
            <Link to="#" className="nav-icon back">
                <FaIcons.FaAdjust onClick={publishEvent} />
            </Link>           
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-close'>
                        <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>                     
                    </Link>
                </li>

                {SidebarKiboData.map((item, index) => { return <Workspace key={index} index={index} item={item}/> })}                
                
            </ul>
        </nav>

        </IconContext.Provider>
    </>
  );
}

export default Navbar;
