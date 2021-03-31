import { auth, firestore } from "./firebase";
import "./App.css";

const App = () => {
  console.log(auth, firestore);
  const clickBtn = () => {
    console.log("click");
  };

  return <button onClick={clickBtn}> CLICK</button>;
};

export default App;
