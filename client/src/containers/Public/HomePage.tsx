import { text } from '../../ultils/constant';
import { Province } from '../../components/index';
import { ListOfNewpapers, SidebarOfPage } from './index';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col w-[70%] gap-3 border border-red-500">
      <div>
        <h1 className="text-[20px] text-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-500 ">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="flex w-full gap-3 ">
        <div className=" w-[70%]  bg-white rounded-md border border-[#dedede]">
          <ListOfNewpapers />
        </div>
        <div className="w-[30%]  bg-white rounded-md border border-[#dedede]">
          <SidebarOfPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
