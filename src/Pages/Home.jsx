import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import RecentSales from '../Components/RecentSales';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-gray-100">
        <Navbar />
        <div className="p-6">
          <RecentSales />
          </div>
      </div>
    </div>
  );
};

export default Home;
