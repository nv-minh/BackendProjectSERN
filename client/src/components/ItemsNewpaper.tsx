import React, { memo, useState } from 'react';
import icons from '../ultils/icons';

const images = [
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/1379ebdf-eda5-4ef8-bb22-7da1d19551f2_1658240490.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg',
];
const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;
const ItemsNewpaper = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  console.log(isHoverHeart);
  return (
    <div className="flex w-full p-4  border-t border-orange-600 bg-[#fff9f3]">
      <div className="flex flex-wrap items-center w-2/5 gap-[2px] relative cursor-pointer">
        <img
          src={images[0]}
          alt="error"
          className="w-[49%] h-[120px] object-cover rounded-md"
        />
        <img
          src={images[1]}
          alt="error"
          className="w-[49%] h-[120px] object-cover rounded-md"
        />
        <img
          src={images[2]}
          alt="error"
          className="w-[49%] h-[120px] object-cover rounded-md"
        />
        <img
          src={images[3]}
          alt="error"
          className="w-[49%] h-[120px] object-cover rounded-md"
        />
        <span className="absolute px-1 text-white bg-[rgba(0,0,0,.5)] rounded-md bottom-[8px] left-[3px]">
          4 ảnh
        </span>
        <span
          className="absolute px-1 rounded-md bottom-[8px] right-[7px]"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill fontSize="1.5em" color="red" />
          ) : (
            <RiHeartLine fontSize="1.5em" color="white" />
          )}
        </span>
      </div>
      <div className="w-[60%]">
        <div className="flex justify-between gap-4">
          <div className="overflow-hidden font-medium text-red-600">
            <GrStar className="star-item" color="#ffd454" fontSize="1.5em" />
            <GrStar className="star-item" color="#ffd454" fontSize="1.5em" />
            <GrStar className="star-item" color="#ffd454" fontSize="1.5em" />
            <GrStar className="star-item" color="#ffd454" fontSize="1.5em" />
            <GrStar className="star-item" color="#ffd454" fontSize="1.5em" />
            Cho thuê phòng trọ có ban công, máy lạnh, thang máy giá rẻ tại P15, Q Tân
            Bình. Liên hệ: 0918180057
          </div>
          <div className="w-[10%] flex justify-end mt-2">
            <BsBookmarkStarFill fontSize="1.5em" color="orange" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <span className="font-bold text-green-600">3.7 triệu/tháng</span>
          <span>28m2</span>
          <span>Quận Tân Bình, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500">
          KHAI TRƯƠNG NHÀ NGHỈ - CHO THUÊ DÀI HẠN (GIÁ THƯƠNG LƯỢNG)- Thuê theo giờ
          60k/giờ, 150k/ngày và 150k/ đêm. Cả ngày lẫn đêm 200k.- Phòng ốc sạch sẽ, mới
        </p>
        <div className="flex items-center justify-between my-5">
          <div className="flex">
            <img
              src="https://scontent.fhan19-1.fna.fbcdn.net/v/t1.15752-9/334792884_6607530132607870_4627770684057086772_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hxgRbQH19BAAX_Ndvq8&_nc_ht=scontent.fhan19-1.fna&oh=03_AdTpLepcpE2gd-FkcCBoEhnGiIicoMnhv-6K0MpG3tOo2w&oe=6428351B"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <p className="ml-4">Tuệ Thu</p>
          </div>
          <div className="flex items-center justify-end">
            <button type="button" className="text-white bg-blue-700">
              Gọi 0120301201
            </button>
            <button className="text-blue-700" type="button">
              Gọi 01-23492013
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ItemsNewpaper);
