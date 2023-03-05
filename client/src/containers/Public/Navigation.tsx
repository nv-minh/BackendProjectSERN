import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiGetCategories } from '../../services/category';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString';
import React from 'react';

const Navigation = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  type Category = {
    code: string;
    value: string;
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const response: any = await apiGetCategories();
      if (response?.data.success === true) {
        setCategories(response.data.categories);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-full  h-[40px] bg-secondary1 text-white ">
      <div className="flex justify-center w-full h-full font-medium m-text-sm auto">
        <div className="flex items-center justify-center w-20 h-full bg-secondary2">
          <NavLink to={'/'}>Trang chủ</NavLink>
        </div>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="flex items-center justify-center h-full px-3 py-0 hover:bg-secondary2"
              >
                <NavLink to={formatVietnameseToString(item.value)}>{item.value}</NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
