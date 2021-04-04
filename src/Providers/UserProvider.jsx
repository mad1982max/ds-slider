import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log("changedContext", userAuth);
      setUser(userAuth);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
