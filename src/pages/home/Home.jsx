import './home.css'
import React from 'react';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import Chart from '../../Components/charts/Chart';
import {userData} from '../../dummyData'
import WidgetLg from '../../Components/widgetLg/WidgetLg';
import WidgetSm from '../../Components/widgetSm/WidgetSm';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <FeaturedInfo/>
                <Chart data={userData}/>
                <div className="home-widget">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>
        </div>
    );
};

export default Home;