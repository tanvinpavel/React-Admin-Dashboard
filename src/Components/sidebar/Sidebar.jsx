import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item active'>
                            <LineStyle className='sidebar-icon'/>
                            Home
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline className='sidebar-icon'/>
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            <TrendingUp className='sidebar-icon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <PermIdentity className='sidebar-icon'/>
                            Users
                        </li>
                        <li className='sidebar-list-item'>
                            <Storefront className='sidebar-icon'/>
                            Products
                        </li>
                        <li className='sidebar-list-item'>
                            <AttachMoney className='sidebar-icon'/>
                            Transactions
                        </li>
                        <li className='sidebar-list-item'>
                            <BarChart className='sidebar-icon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <MailOutline className='sidebar-icon'/>
                            Mail
                        </li>
                        <li className='sidebar-list-item'>
                            <DynamicFeed className='sidebar-icon'/>
                            Feedback
                        </li>
                        <li className='sidebar-list-item'>
                            <ChatBubbleOutline className='sidebar-icon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <WorkOutline className='sidebar-icon'/>
                            Manage
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline className='sidebar-icon'/>
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            <Report className='sidebar-icon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;