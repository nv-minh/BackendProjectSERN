import React, { memo, ReactNode } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const notActivePagination =
  'px-[18px] py-[15px] bg-white hover:bg-[#ddd] hover:text-white rounded-md cursor-pointer w-[46px] h-[48px] text-center items-center justify-center';
const activePagination =
  'px-[18px] py-[15px] bg-[#E13427] text-white  rounded-md  w-[46px] h-[48px] text-center items-center justify-center';

interface props {
  key?: string;
  page?: string | string[] | undefined;
  currentPage?: string;
  icon?: ReactNode;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

const PageNumber = ({
  key,
  page = '1',
  currentPage = '1',
  icon,
  setCurrentPage,
}: props) => {
  const navigate = useNavigate();
  const handleChangePage = () => {
    if (page !== '...') {
      if (setCurrentPage) {
        setCurrentPage(+page);
      }
      navigate({
        pathname: '/',
        search: createSearchParams({
          page: page,
        }).toString(),
      });
    }
  };
  return (
    <div
      key={key}
      className={+page === +currentPage ? activePagination : notActivePagination}
      onClick={handleChangePage}
    >
      {icon || page}
    </div>
  );
};
export default memo(PageNumber);
