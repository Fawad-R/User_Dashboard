import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../Styling/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div >
      <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
        <button id="navbarToggle" className="block md:hidden md:fixed right-0 mr-6" onClick={handleSidebarToggle}>
          <i className="fad fa-chevron-double-down"></i>
        </button>
        <div
          id="navbar"
          className={`animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center ${
            isSidebarOpen ? 'active' : ''
          }`}
        >
          <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
            <strong className="capitalize ml-1 flex-1" style={{ fontSize: "21px", color: 'black', fontWeight: "300", marginLeft: '11px' }}>
              Users
            </strong>
            <ArrowDropDownIcon />
          </div>
          <div className="Navbar">
          </div>
          <div className="flex flex-row-reverse items-center">
            <div className="dropdown relative md:static">
              <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img className="w-full h-full object-cover" src="img/user.svg" alt="User" />
                </div>
                <div className="ml-2 capitalize flex">
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: 'start', alignContent: 'start', alignItems: 'start' }}>
                    <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">Fawad</h1>
                    <p className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none" style={{ color: "#7dbeff", marginTop: "1%" }}>
                      Admin
                    </p>
                  </div>
                  <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                </div>
              </button>
              
            </div>
            <div className="dropdown relative mr-5 md:static">
              <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                <HelpIcon />
              </button>
            </div>
            <div className="dropdown relative mr-5 md:static">
              <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon color="action" />
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
