import { auth, firestore } from "./firebase";
import UserPage from "./Components/UserPage/UserPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import "./App.css";

const App = () => {
  console.log(auth, firestore);

  let user = "";

  return (
    <>
      {user ? (
        <UserPage />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/passwordReset" component={PasswordReset} />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
