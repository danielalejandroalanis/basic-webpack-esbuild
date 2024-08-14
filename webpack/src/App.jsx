import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
  return (
    <div className="container">
      <h1>Hello!</h1>
      <button onClick={handleClick}>Press</button>
      <div>
        <strong>{counter}</strong>
      </div>
    </div>
  );
};

export default App;
