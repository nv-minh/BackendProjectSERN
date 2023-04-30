import icons from '../ultils/icons';
import React, { useEffect, useState } from 'react';

const { GrLinkPrevious } = icons;

interface props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: any;
}

export const Modal = (props: props) => {
  const [persent1, setPersent1] = useState(20);
  const [persent2, setPersent2] = useState(50);

  const handleChangeRange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const stackElement = document.getElementById('track');
    const stackRect = stackElement?.getBoundingClientRect();
    if (stackRect) {
      let percent = Math.round(
        ((event.clientX - stackRect.left) * 100) / stackRect.width,
      );
      if (Math.abs(persent1 - percent) <= Math.abs(persent2 - percent)) {
        setPersent1(percent);
      } else {
        setPersent2(percent);
      }
    }
  };
  const convertMaxPercenttoTarget = (percent: number) => {
    let maxValue = props.content[props.content.length - 1].value.match(/\d+/)[0];
    return props.title === 'prices'
      ? (maxValue * percent) / 100
      : props.title === 'areas'
      ? (maxValue * percent) / 100
      : 0;
  };
  const convertto100 = (percent: number) => {
    let target = props.title === 'prices' ? 15 : props.title === 'areas' ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  useEffect(() => {
    const activedTrackEl = document.getElementById('track-active');
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  return (
    <div
      onClick={() => {
        props.setIsShowModal(false);
      }}
      className="fixed top-0 right-0 bottom-0 left-0 bg-overlay-70 z-30 flex justify-center items-center "
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          props.setIsShowModal(true);
        }}
        className="w-1/3 bg-white rounded-md "
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
        {(props.title === 'prices' || props.title === 'areas') && (
          <div className="p-12 py-20 ">
            <div className="flex flex-col items-center justify-center relative">
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600  w-full text-center">
                {persent1 === 100 && persent2 === 100
                  ? `Trên ${convertMaxPercenttoTarget(persent1)} ${
                      props.title === 'prices' ? 'triệu' : 'm2'
                    } +`
                  : `Từ ${
                      persent1 <= persent2
                        ? convertMaxPercenttoTarget(persent1)
                        : convertMaxPercenttoTarget(persent2)
                    } - ${
                      persent2 >= persent1
                        ? convertMaxPercenttoTarget(persent2)
                        : convertMaxPercenttoTarget(persent1)
                    } ${props.title === 'prices' ? 'triệu' : 'm2'}`}
                <div className="flex items-center justify-center w-full flex-col relative mt-10">
                  <div
                    id="track"
                    className="slider-track h-[5px] absolute top-0 bottom-0 bg-gray-300 rounded-full w-full"
                    onClick={(event) => handleChangeRange(event)}
                  ></div>
                  <div
                    id="track-active"
                    className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
                    onClick={(event) => handleChangeRange(event)}
                  ></div>
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="5"
                    className="w-full appearance-none pointer-events-none  absolute top-0 bottom-0 "
                    value={persent1}
                    onChange={(event) => setPersent1(+event.target.value)}
                  />{' '}
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="5"
                    className="w-full  appearance-none  pointer-events-none absolute top-0 bottom-0 "
                    value={persent2}
                    onChange={(event) => setPersent2(+event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {(props.title === 'categories' || props.title === 'provinces') && (
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
        )}
      </div>
    </div>
  );
};
