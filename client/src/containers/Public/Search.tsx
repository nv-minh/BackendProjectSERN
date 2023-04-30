import SearchItem from '../../components/SearchItem';
import icons from '../../ultils/icons';
import React, { memo, useState } from 'react';
import { Modal } from '../../components/Modal';
import { useSelector } from 'react-redux';
import { ICategories, RootState } from '../../store/interface';

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<any>([]);
  const { provinces, prices, areas, categories } = useSelector(
    (state: RootState) => state.app,
  );

  const handleShowModal = (title: string, content: any) => {
    setTitle(title);
    setContent(content);
    setIsShowModal(true);
  };
  return (
    <>
      <div className="h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2">
        <span
          className="flex-1 cursor-pointer "
          onClick={() => handleShowModal('Phòng trọ, nhà trọ', categories)}
        >
          <SearchItem
            text={'Phòng trọ, nhà trọ'}
            IconBefore={MdOutlineHouseSiding}
            IconAfter={BsChevronRight}
            fontWeight={'font-medium text-black'}
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal('Toàn quốc', provinces)}
        >
          <SearchItem
            text={'Toàn quốc'}
            IconBefore={HiOutlineLocationMarker}
            IconAfter={BsChevronRight}
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal('Chọn giá', prices)}
        >
          <SearchItem
            text={'Chọn giá'}
            IconBefore={TbReportMoney}
            IconAfter={BsChevronRight}
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal('Chọn diện tích', areas)}
        >
          <SearchItem
            text={'Chọn diện tích'}
            IconBefore={RiCrop2Line}
            IconAfter={BsChevronRight}
          />
        </span>
        <span className="flex-1 cursor-pointer" onClick={() => setIsShowModal(true)}>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-blue-100 rounded-md outline-non"
          >
            <FiSearch />
            Tìm Kiếm
          </button>
        </span>
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title={title}
          content={content}
          key={content.code}
        />
      )}
    </>
  );
};

export default Search;
