import moment from "moment";
import "moment/locale/vi";

const formatDate = (date) => {
  const dayOfWeek = date.format("dddd"); // Lấy thứ trong tuần
  const time = date.format("HH:mm"); // Lấy giờ và phút
  const day = date.format("DD/MM/YYYY"); // Lấy ngày, tháng và năm

  return `${dayOfWeek}, ${time} ${day}`; // Trả về chuỗi định dạng
};

const generateDate = () => {
  let today = moment();
  const expirationDate = today.clone().add(10, "days"); // Thêm 10 ngày vào thời gian hiện tại
  return {
    today: formatDate(today),
    expireDay: formatDate(expirationDate),
  };
};
export default generateDate;
