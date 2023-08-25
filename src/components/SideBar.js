import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import QuizIcon from '@mui/icons-material/Quiz';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';
import pic from "../assests/image2.png"

const SideBar = ({ text, children }) => {
    const { collapseSidebar } = useProSidebar();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: 'inherit',     // Inherit color from parent
        fontSize: "19px",
        fontWeight: "bold"
    };

    return (
        <div id="app" style={{ height: "100vh", display: "flex" }}>
            <Sidebar style={{ height: "100vh" }}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            collapseSidebar();
                            setIsSidebarCollapsed(!isSidebarCollapsed);
                        }}
                        style={{ textAlign: "center" }}
                    >
                        <h1>LG</h1>
                    </MenuItem>
                    {isSidebarCollapsed ? null : (
                        <div className="image">
                            <img src={pic} alt="true"/>
                        </div>
                    )}
                    <div className="link-list">   
                    <Link to="/" style={linkStyle}><MenuItem icon={<DashboardIcon />}> 
                     Dashboard </MenuItem></Link>
                  <Link to="/quiz" style={linkStyle}><MenuItem icon={<QuizIcon />}> 
                   Questionnaire</MenuItem></Link>
                    <Link to="/add" style={linkStyle}> <MenuItem icon={< AddBoxIcon />}>
                         Create</MenuItem></Link>
                    </div>
                </Menu>
            </Sidebar>
            <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}>
  <h1 style={{ color: "black", margin: 0 }}>
    <div className="test">
   <p className="header"> {text} </p>   
      {children}
    </div>
  </h1>
</main>
        </div>
    );
}

export default SideBar;
