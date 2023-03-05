import { Outlet } from 'react-router';
import Header from './Header';
import Navigation from './Navigation';
import Search from './Search';
import React from 'react';

const Home = () => (
  <div className="flex flex-col items-center w-full h-full">
    <Header />
    <Navigation />
    <div className="w-[70%]">
      <Search />
    </div>
    <div className="flex flex-col items-center justify-start w-full">
      <Outlet />
    </div>
  </div>
);

export default Home;
