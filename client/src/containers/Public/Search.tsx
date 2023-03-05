import SearchItem from '../../components/SearchItem';
import icons from '../../ultils/icons';
import React from 'react';

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
const Search = () => {
  return (
    <div className="h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2">
      <SearchItem
        text={'Phòng trọ, nhà trọ'}
        IconBefore={MdOutlineHouseSiding}
        IconAfter={BsChevronRight}
        fontWeight={'font-medium text-black'}
      />
      <SearchItem
        text={'Toàn quốc'}
        IconBefore={HiOutlineLocationMarker}
        IconAfter={BsChevronRight}
      />
      <SearchItem
        text={'Chọn giá'}
        IconBefore={TbReportMoney}
        IconAfter={BsChevronRight}
      />
      <SearchItem
        text={'Chọn diện tích'}
        IconBefore={RiCrop2Line}
        IconAfter={BsChevronRight}
      />
      <button
        type="button"
        className="flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-blue-100 rounded-md outline-non"
      >
        <FiSearch />
        Tìm Kiếm
      </button>
    </div>
  );
};

export default Search;
