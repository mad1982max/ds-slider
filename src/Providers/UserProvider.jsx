import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log("props", props);

  useEffect(() => {
    console.log("useEff work");
    auth.onAuthStateChanged((userAuth) => {
      const user = userAuth;
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
