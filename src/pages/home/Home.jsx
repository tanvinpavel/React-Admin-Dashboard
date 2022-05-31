import './home.css'
import React from 'react';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import Chart from '../../Components/charts/Chart';
import {userData} from '../../dummyData'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <FeaturedInfo/>
                <Chart data={userData}/>
            </div>
        </div>
    );
};

export default Home;