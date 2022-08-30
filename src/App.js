import "./App.css";
import FuctionalComp from "./Components/FuctionalComp";
import ClassComp from "./Components/ClassComp";
import Props from "./Components/Props";
import State from "./Components/State";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <State /> */}
      <Props name="Bruce" heroname="Batman" />
      {/* <FuctionalComp /> */}
      {/* <ClassComp /> */}
    </div>
  );
}

export default App;
