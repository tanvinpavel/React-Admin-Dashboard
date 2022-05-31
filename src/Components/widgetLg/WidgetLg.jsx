import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {

    const StatusButton = ({type}) => {
        return <span className={"widget-lg-btn " + type}>{type}</span>
    }

    return (
        <div className='widget-lg'>
            <h3>Latest transactions</h3>
            <div className="widget-lg-wrapper">
                <table className='widget-lg-table'>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td className='widget-lg-cus'>
                            <img src="./images/01.jpg" alt="" className="widget-lg-pic" />
                            <span className="widget-lg-cus-name">Tawsif Iqtheder</span>
                        </td>
                        <td>2 Jun 2022</td>
                        <td>$244.00</td>
                        <td>
                            <StatusButton type="Approved"/>
                        </td>
                    </tr>
                    <tr>
                        <td className='widget-lg-cus'>
                            <img src="./images/pavel-2.jpg" alt="" className="widget-lg-pic" />
                            <span className="widget-lg-cus-name">Tanvir Pavel</span>
                        </td>
                        <td>2 Jun 2022</td>
                        <td>$244.00</td>
                        <td>
                            <StatusButton type="Declined"/>
                        </td>
                    </tr>
                    <tr>
                        <td className='widget-lg-cus'>
                            <img src="./images/02.jpg" alt="" className="widget-lg-pic" />
                            <span className="widget-lg-cus-name">Hasina Khan</span>
                        </td>
                        <td>2 Jun 2022</td>
                        <td>$244.00</td>
                        <td>
                            <StatusButton type="Pending"/>
                        </td>
                    </tr>
                    <tr>
                        <td className='widget-lg-cus'>
                            <img src="./images/03.jpg" alt="" className="widget-lg-pic" />
                            <span className="widget-lg-cus-name">Jasica</span>
                        </td>
                        <td>2 Jun 2022</td>
                        <td>$244.00</td>
                        <td>
                            <StatusButton type="Approved"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default WidgetLg;