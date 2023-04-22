import { text } from '../../ultils/constant';
import { Province } from '../../components/index';
import { ListOfNewpapers, Pagination, SidebarOfPage } from './index';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const { posts } = useSelector((state: any) => state.posts);
  const [params] = useSearchParams();
  const queryPage = params.get('page') || '1';
  return (
    <div className="flex flex-col w-[70%] gap-3 border border-red-500">
      <div>
        <h1 className="text-[20px] text-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-500 ">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="flex w-full gap-3 ">
        <div className=" w-[70%]  bg-white rounded-md border border-[#dedede]">
          <ListOfNewpapers queryPage={queryPage} />
        </div>
        <div className="w-[30%]  bg-white rounded-md border border-[#dedede]">
          <SidebarOfPage />
        </div>
      </div>
      <div className="mt-5 mb-12 mr-56">
        <Pagination itemsNumber={posts.length} queryPage={queryPage} />
      </div>
    </div>
  );
};

export default HomePage;
