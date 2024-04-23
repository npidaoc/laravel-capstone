import React, { useState, useEffect } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, onUserClick }) {
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data); // Assuming your API returns an array of users
            setResult("Users fetched successfully");
        } catch (error) {
            console.error("Error:", error);
            setResult("Error: Failed to fetch users. Please try again later.");
        }
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    ADMIN
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li> */}
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li> */}
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </a>
                </li> */}
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Users
                    </a>
                </li>
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li> */}
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li> */}
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;


