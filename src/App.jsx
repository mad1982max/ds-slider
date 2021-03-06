import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import UserPage from "./Components/UserPage/UserPage";
import { UserContext } from "./Providers/UserProvider";
import "./App.css";

const App = () => {
  const user = useContext(UserContext);

  return (
    <div className="app">
      <Router>
        {user && <Redirect to="/userPage" />}
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/userPage" component={UserPage} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/passwordReset" component={PasswordReset} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
