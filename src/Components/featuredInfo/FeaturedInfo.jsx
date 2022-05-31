import './featuredInfo.css'
import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,455</span>
                    <span className="featured-money-rate">
                        -11.4 <ArrowDownward className="featured-icon negative" />
                    </span>
                </div>
                <span className="featured-sub">Compare to the last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Seals</span>
                <div className="featured-money-container">
                    <span className="featured-money">$5,455</span>
                    <span className="featured-money-rate">
                        -8.4 <ArrowDownward className="featured-icon negative" />
                    </span>
                </div>
                <span className="featured-sub">Compare to the last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,455</span>
                    <span className="featured-money-rate">
                        +3.4 <ArrowUpward className="featured-icon" />
                    </span>
                </div>
                <span className="featured-sub">Compare to the last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;