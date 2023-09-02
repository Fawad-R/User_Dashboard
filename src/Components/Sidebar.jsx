import React, { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorIcon from '@mui/icons-material/Monitor';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Styling/sidebar.css';
import Dropdown from './Dropdown/Dropdown';
import Dropdown2 from './Dropdown/Dropdown2';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen ?
        <div className={`Sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div
            id="sideBar"
            className="flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster relative"
          >
            <div className="flex flex-col">
              <div className="text-right hidden md:block mb-4">
              </div>
              <div className='flex-none w-56 flex flex-row items-center'>
                <img src="img/logo.png" className="MaterialIcon2 w-10 flex-none" />
                <strong className="capitalize ml-1 flex-1" style={{ fontWeight: 800, fontSize: "20px" }}>
                  Dashboard
                </strong>
                <ChevronLeftIcon
                  style={{ backgroundColor: "white", borderRadius: "200px", boxShadow: "-1px 3px 5px 0px rgba(0,0,0,0.1)" }}
                  onClick={toggleSidebar}
                />
              </div>

              <p className="uppercase MaterialIcon text-xs text-gray-600 mb-4 tracking-wider">
                home
              </p>
              <a
                href="./index.html"
                className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
              >
                <GridViewIcon className="MaterialIcon" />
                Dashboard
              </a>
              <Dropdown />
              <a
                href="./index-1.html"
                className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
              >
                <PaymentIcon className="MaterialIcon" />
                Payments
              </a>
              <a
                href="./index-1.html"
                className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
              >
                <MonitorIcon className="MaterialIcon" />
                CRM
              </a>
              <Dropdown2 />
              <a
                href="./index-1.html"
                className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
              >
                <ImportContactsIcon className="MaterialIcon" />
                Scholarships
              </a>
              <a
                href="./index-1.html"
                className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
              >
                <SettingsIcon className="MaterialIcon" />
                Settings
              </a>
            </div>
          </div>
          <a
            href="#"
            className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 Logout"
          >
            <i className="fad fa-computer-classic text-xs mr-2"></i>
            Logout
          </a>
        </div>
        : ''

      }
      {isSidebarOpen === false ?
        <div className='flex-none w-5 '>

          <ChevronRightIcon
            style={{ backgroundColor: "white", borderRadius: "200px", position: "absolute", top: "8%", boxShadow: "-1px 3px 5px 0px rgba(0,0,0,0.1)" }}
            onClick={toggleSidebar}
          />
        </div>
        : ''
      }
    </div>

  );
};

export default Sidebar;
