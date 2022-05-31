import React from 'react';
import './topbar.css';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Taviradmin</span>
                </div>
                <div className="top-right">
                    <div className="topbar-icon-container">
                        <NotificationsNone/>
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Language/>
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Settings/>
                    </div>
                    <img src="./images/pavel-2.jpg" alt="" className='topbar-avatar' />
                </div>
            </div>
        </div>
    );
};

export default Topbar;