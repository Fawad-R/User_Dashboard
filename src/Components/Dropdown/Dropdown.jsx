import React, { useState } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import '../../Styling/dropdown.css'
import '../../Styling/sidebar.css'
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <a href="#" className="DropDownIcon mb-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <button style={{fontWeight:"bold",fontSize:"16px"}} className="dropdown-toggle" onClick={toggleDropdown}>

                    <GroupsIcon  className='MaterialIcon ' />
                    Users
                    <i style={{ marginLeft: "5%" }} className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                    </ul>
                )}
            </a>
        </div>
    );
};

export default Dropdown;
