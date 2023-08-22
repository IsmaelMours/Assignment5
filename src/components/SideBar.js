import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import QuizIcon from '@mui/icons-material/Quiz';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';



const SideBar = ({text, children, addedQ }) => {
    const { collapseSidebar } = useProSidebar();

    const linkStyle = {
      textDecoration: 'none', // Remove underline
      color: 'inherit',     // Inherit color from parent
    };

    return (

      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h1>LG</h1>
            </MenuItem>

  
            <MenuItem icon={<DashboardIcon/>}>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      </MenuItem>
      <MenuItem icon={<QuizIcon />}>
        <Link to="/quiz" style={linkStyle}>Questionnaire</Link>
      </MenuItem>
      <MenuItem icon={<AddBoxIcon />}>
        <Link to="/add" style={linkStyle}>Create</Link>
      </MenuItem>
        
          </Menu>
        </Sidebar>
        <main>
          <h1 style={{ color: "Black", marginLeft: "30rem" }}>
            <div className="test">
              {text}  
              {children}
              {addedQ}          
            </div>
          </h1>
        </main>
      </div>
 
    );
}

export default SideBar