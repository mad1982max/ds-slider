import "./App.css";

const App = () => {
  const clickBtn = () => {
    console.log("click");
  };

  return <button onClick={clickBtn}> CLICK</button>;
};

export default App;
