import React from 'react';
import { Button } from '../../components';
import { ItemsNewpaper } from '../../components/index';
const ListOfNewpapers = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between ">
        <h4 className="text-base font-medium">Danh sách tin đăng</h4>
        <span className="text-xs">Cập nhật: 12:05 25/08/2022</span>
      </div>
      <div className="flex items-center gap-1 py-2 text-xs">
        <span className="text-sm">Sắp xếp</span>
        <Button
          text="Mặc định"
          textColor="text-black"
          bgColor="!bg-[#f1f1f1]"
          size="h-[25px] w-[110px]"
        />
        <Button
          text="Mới nhất"
          textColor="text-black"
          bgColor="!bg-[#f1f1f1]"
          size="h-[25px] w-[100px]"
        />
      </div>
      <div className="flex flex-col">
        <ItemsNewpaper />
      </div>
    </div>
  );
};

export default ListOfNewpapers;
