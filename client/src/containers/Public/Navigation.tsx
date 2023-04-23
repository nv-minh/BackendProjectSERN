import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiGetCategories } from '../../services/category';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { AnyAction, Dispatch } from 'redux';

const Navigation = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  // const { categories } = useSelector((state) => state.app);

  // useEffect(() => {
  //   dispatch(actions.getCategories() as unknown as ICategories);
  // }, []);
  return (
    <div className="w-full  h-[40px] bg-secondary1 text-white ">
      {/*<div className="flex justify-center w-full h-full font-medium m-text-sm auto">*/}
      {/*  <div className="flex items-center justify-center w-20 h-full bg-secondary2">*/}
      {/*    <NavLink to={'/'}>Trang chủ</NavLink>*/}
      {/*  </div>*/}
      {/*  {categories?.length > 0 &&*/}
      {/*    categories.map((item) => {*/}
      {/*      return (*/}
      {/*        <div*/}
      {/*          key={item.code}*/}
      {/*          className="flex items-center justify-center h-full px-3 py-0 hover:bg-secondary2"*/}
      {/*        >*/}
      {/*          <NavLink to={formatVietnameseToString(item.value)}>{item.value}</NavLink>*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*</div>*/}
    </div>
  );
};

export default Navigation;
