import { AiFillCheckCircle } from "react-icons/ai";
import { TiStarburst } from "react-icons/ti";
import "./badge.css";

const Badge = ({ type, value }) => {
  let colorClass, msg;

  if (type === "avaliability") {
    if (value) {
      msg = "В наличии";
      colorClass = "avaliable";
    } else {
      msg = "Нет в наличии";
      colorClass = "notAvaliable";
    }
  } else if (type === "status") {
    msg = value;
    if (msg === "Хит") {
      colorClass = "bestSeller";
    } else if (msg === "New") {
      colorClass = "new";
    } else if (msg === "Акция") {
      colorClass = "discount";
    }
  }

  return (
    <div className={`${type} ${colorClass} badgeWrapper`}>
      <div className="d-flex align-items-center justify-content-center">
        {type === "avaliability" ? <AiFillCheckCircle /> : <TiStarburst />}
        <span className="mx-1">{msg}</span>
      </div>
    </div>
  );
};

export default Badge;
