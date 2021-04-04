import { useContext } from "react";
import UserCard from "../UserCard/UserCard";
import SliderContainer from "../Slider/SliderContainer";
import { UserContext } from "../../Providers/UserProvider";
import { auth } from "../../firebase";
import "./userPage.css";

const UserPage = () => {
  const user = useContext(UserContext);
  const { displayName, email, photoURL } = user;

  return (
    <>
      <header className="header">
        <button
          className="signOut"
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign out
        </button>
      </header>
      <UserCard name={displayName} email={email} photoSrc={photoURL}></UserCard>
      <SliderContainer />
    </>
  );
};

export default UserPage;
