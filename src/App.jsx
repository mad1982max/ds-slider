import { auth, firestore } from "./firebase";
import Button from "react-bootstrap/Button";
import "./App.css";

const App = () => {
  console.log(auth, firestore);
  const clickBtn = () => {
    console.log("click");
  };

  return (
    <Button variant="primary" onClick={clickBtn}>
      {" "}
      CLICKER
    </Button>
  );
};

export default App;
