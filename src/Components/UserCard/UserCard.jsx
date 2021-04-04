import "./userCard.css";

const UserCard = ({ name, email, photoSrc }) => (
  <div className="userCard">
    <img src={photoSrc} alt="avatar" />
    <div className="container">
      <div className="name">{name}</div>
      <div className="email">{email}</div>
    </div>
  </div>
);

export default UserCard;
