import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import LogoText from "../../assets/logo/logo-text.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const Header = (props) => {
     const headerElements = [
          { name: "home", link: "/" },
          { name: "History", link: "/history" },
          { name: "About us", link: "/about-us" },
          { name: "help", link: "/help" },
     ];

     const navigate = useNavigate();
     const location = useLocation();

     const [scrollY, setScrollY] = useState(0);
     const [wide, setWide] = useState(true);

     useEffect(() => {
          const handleScroll = () => setScrollY(window.scrollY);
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     useEffect(() => {
          if (scrollY > 60) setWide(false);
          else setWide(true);
     }, [scrollY]);

     return (
          <div
               id="header"
               className={`w-100 px-5 top-0 header ${
                    !wide ? "bg-dark-grey2 shadow" : ""
               } ${props.shadow ? "shadow" : ""}
               ${props.fixed ? "position-fixed" : "mb-4"}
               ${props.bg ? "bg-dark-grey2" : ""}
               `}
               style={{
                    height: `${
                         props.height
                              ? `${props.height}`
                              : wide
                              ? "100px"
                              : "50px"
                    }`,
               }}
          >
               <div className="w-100 h-100 px-5 py-3 d-flex justify-content-between align-items-center">
                    <div
                         className=" d-flex justify-content-center align-items-center ms-3 cursor-pointer"
                         onClick={() => {
                              if (location.pathname === "/")
                                   window.scroll(0, 0);
                              else navigate("/");
                         }}
                    >
                         {wide && (
                              <img
                                   src={Logo}
                                   className="h-100 me-2"
                                   alt="Logo"
                              />
                         )}
                         <img
                              src={LogoText}
                              className={!wide ? "small-logo" : ""}
                              alt="Logo"
                         />
                    </div>
                    {props.auth && (
                         <div className="w-50 d-flex justify-content-end align-items-center me-3">
                              <div className="w-75 d-flex justify-content-around align-items-center me-3">
                                   {headerElements.map((element, index) => (
                                        <h1
                                             key={index}
                                             className={`${
                                                  wide ? "fs-5" : "fs-6 wide"
                                             } 
                                        ${props.bg ? "wide" : ""}
                                        m-0 border-top-0 border-start-0 border-end-0 light-grey-border text-uppercase header-element cursor-pointer position-relative`}
                                             onClick={() =>
                                                  navigate(element.link)
                                             }
                                        >
                                             {element.name}
                                        </h1>
                                   ))}
                                   <div>
                                        <Tooltip title="Account settings">
                                             <IconButton
                                                  // onClick={handleClick}
                                                  size="small"
                                                  sx={{ ml: 2 }}
                                                  // aria-controls={
                                                  //      open ? "account-menu" : undefined
                                                  // }
                                                  aria-haspopup="true"
                                                  // aria-expanded={open ? "true" : undefined}
                                             >
                                                  <Avatar
                                                       sx={{
                                                            width: 32,
                                                            height: 32,
                                                       }}
                                                  >
                                                       M
                                                  </Avatar>
                                             </IconButton>
                                        </Tooltip>
                                        <Menu
                                             // anchorEl={anchorEl}
                                             id="account-menu"
                                             // open={open}
                                             // onClose={handleClose}
                                             // onClick={handleClose}
                                             PaperProps={{
                                                  elevation: 0,
                                                  sx: {
                                                       overflow: "visible",
                                                       filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                       mt: 1.5,
                                                       "& .MuiAvatar-root": {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                       },
                                                       "&:before": {
                                                            content: '""',
                                                            display: "block",
                                                            position:
                                                                 "absolute",
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: "background.paper",
                                                            transform:
                                                                 "translateY(-50%) rotate(45deg)",
                                                            zIndex: 0,
                                                       },
                                                  },
                                             }}
                                             transformOrigin={{
                                                  horizontal: "right",
                                                  vertical: "top",
                                             }}
                                             anchorOrigin={{
                                                  horizontal: "right",
                                                  vertical: "bottom",
                                             }}
                                        >
                                             <MenuItem
                                             // onClick={handleClose}
                                             >
                                                  <Avatar /> Profile
                                             </MenuItem>
                                             <MenuItem
                                             //  onClick={handleClose}
                                             >
                                                  <Avatar /> My account
                                             </MenuItem>
                                             <Divider />
                                             <MenuItem
                                             // onClick={handleClose}
                                             >
                                                  <ListItemIcon>
                                                       <PersonAdd fontSize="small" />
                                                  </ListItemIcon>
                                                  Add another account
                                             </MenuItem>
                                             <MenuItem
                                             // onClick={handleClose}
                                             >
                                                  <ListItemIcon>
                                                       <Settings fontSize="small" />
                                                  </ListItemIcon>
                                                  Settings
                                             </MenuItem>
                                             <MenuItem
                                             // onClick={handleClose}
                                             >
                                                  <ListItemIcon>
                                                       <Logout fontSize="small" />
                                                  </ListItemIcon>
                                                  Logout
                                             </MenuItem>
                                        </Menu>
                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Header;
