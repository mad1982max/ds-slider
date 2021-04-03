import { useContext } from "react";
import UserContext from "../../Providers/UserProvider";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./userPage.css";

const UserPage = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  console.log("user", user);
  return (
    <>
      <header className="header">
        <button
          className="signOut"
          onClick={() => {
            auth.signOut();
            // history.push("/");
          }}
        >
          Sign out
        </button>
      </header>
      <div className="userCard">
        <div className="name">maks</div>
      </div>
    </>
  );
};

export default UserPage;
