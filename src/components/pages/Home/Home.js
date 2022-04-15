import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Link to={`/home/breakfasts`}>Breakfasts</Link>
            <Link to={`/home/dinners`}>Dinners</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;