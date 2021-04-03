import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import { useContext } from "react";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import UserPage from "./Components/UserPage/UserPage";
import { UserContext } from "./Providers/UserProvider";
import "./App.css";

const App = () => {
  const user = useContext(UserContext);
  console.log("user app", user);

  return (
    <div className="app">
      {user ? (
        <UserPage />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/userPage" component={UserPage} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/passwordReset" component={PasswordReset} />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
