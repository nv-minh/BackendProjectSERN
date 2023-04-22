import React, { useEffect, useState } from 'react';
import { PageNumber } from '../../components';
import { useSelector } from 'react-redux';
import { GrLinkNext } from 'react-icons/gr';

interface props {
  itemsNumber: number;
  queryPage: string;
}

const Pagination = (props: props) => {
  const { count, posts } = useSelector((state: any) => state.posts);
  const [arrayPage, setArrayPage] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(+props.queryPage);
  let maxPage = Math.floor(count / props.itemsNumber);
  useEffect(() => {
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 2;
    let start = currentPage - 1 >= 4 ? currentPage - 2 : 2;
    let temp = [];

    for (let i = start; i <= end; i++) {
      temp.push(i);
      setArrayPage(temp);
      //setArrayPage((previous) => [...previous, i]);
    }
  }, [currentPage]);
  return (
    <div className="flex items-center justify-center gap-1 ">
      <PageNumber
        setCurrentPage={setCurrentPage}
        page={'1'}
        currentPage={props.queryPage}
      />
      {currentPage > 6 && <PageNumber page="..." />}
      {arrayPage.length > 0 &&
        arrayPage.map((item) => {
          return (
            <PageNumber
              key={item.toString()}
              page={item.toString()}
              currentPage={props.queryPage}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      <PageNumber page="..." />
      {currentPage < maxPage && (
        <>
          <PageNumber
            icon={<GrLinkNext />}
            page={maxPage.toString()}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
