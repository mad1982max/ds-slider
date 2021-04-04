import defaultImg from "../../Assets/img/avatar.png";
import "./userCard.css";

const UserCard = ({ name, email, photoSrc }) => {
  return (
    <div className="userCard">
      <div className="imageWrapper">
        <img src={photoSrc || defaultImg} alt="avatar" />
      </div>
      <div className="container">
        <div className="name">{name}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export default UserCard;
