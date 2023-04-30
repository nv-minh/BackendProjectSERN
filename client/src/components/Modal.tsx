import icons from '../ultils/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { ICategories, RootState } from '../store/interface';

const { GrLinkPrevious } = icons;

interface props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: any;
}

export const Modal = (props: props) => {
  return (
    <div
      onClick={() => {
        props.setIsShowModal(false);
      }}
      className="fixed top-0 right-0 bottom-0 left-0 bg-overlay-70 z-30 flex justify-center items-center"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          props.setIsShowModal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px] flex items-center px-4 border-b border-gray-100">
          <span
            className="hover:text-red-600 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              props.setIsShowModal(false);
            }}
          >
            <GrLinkPrevious size={24} />
          </span>
        </div>
        <div className="p-4 flex flex-col">
          {props.content?.map((item: any) => {
            return (
              <span
                key={props.content.code}
                className="py-2 flex gap-2 items-center border-b border-gray-200"
              >
                <input
                  type="radio"
                  name={props.title}
                  id={item.code}
                  value={item.value}
                />
                <label
                  htmlFor={item.code}
                  className="font-medium text-lg hover:text-blue-600"
                >
                  {item.value}
                </label>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
