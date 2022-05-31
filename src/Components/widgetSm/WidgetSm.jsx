import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <div className='widget-small'>
            <div className="widget-sm-wrapper">
                <h3 className="widget-sm-title">New Join Member</h3>
                <ul className="widget-sm-list">
                    <li className='widget-sm-item'>
                        <img src="./images/pavel-2.jpg" alt="" className="widget-sm-pic" />
                        <div className="widget-sm-user">
                            <span className="widget-sm-username">Tanvir Pavel</span>
                            <span className="widget-sm-user-title">Software Engineer</span>
                        </div>
                        <button className='widget-sm-button'><Visibility className='widget-sm-icon'/>Show</button>
                    </li>
                    <li className='widget-sm-item'>
                        <img src="./images/01.jpg" alt="" className="widget-sm-pic" />
                        <div className="widget-sm-user">
                            <span className="widget-sm-username">Simon Islam</span>
                            <span className="widget-sm-user-title">Software Engineer</span>
                        </div>
                        <button className='widget-sm-button'><Visibility className='widget-sm-icon'/>Show</button>
                    </li>
                    <li className='widget-sm-item'>
                        <img src="./images/02.jpg" alt="" className="widget-sm-pic" />
                        <div className="widget-sm-user">
                            <span className="widget-sm-username">Hasina Khan</span>
                            <span className="widget-sm-user-title">Software Engineer</span>
                        </div>
                        <button className='widget-sm-button'><Visibility className='widget-sm-icon'/>Show</button>
                    </li>
                    <li className='widget-sm-item'>
                        <img src="./images/03.jpg" alt="" className="widget-sm-pic" />
                        <div className="widget-sm-user">
                            <span className="widget-sm-username">Jasica</span>
                            <span className="widget-sm-user-title">Software Engineer</span>
                        </div>
                        <button className='widget-sm-button'><Visibility className='widget-sm-icon'/>Show</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WidgetSm;