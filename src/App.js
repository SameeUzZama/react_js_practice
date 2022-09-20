import "./App.css";
import ComponentA from "./Components/ComponentA";
import { UserProvider } from "./Components/UserContext";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverdCounterTwo from "./Components/HoverdCounterTwo";
import NewCounteTwo from "./Components/NewCounteTwo";
import User from "./Components/User";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Refs from "./Components/Refs";
import ParentComp from "./Components/ParentComp";
import PureComp from "./Components/PureComp";
import Tables from "./Components/Tables";
import Fragment from "./Components/Fragment";
import LifeCycleA from "./Components/LifeCycleA";
import Form from "./Components/Form";
import Inline from "./Components/Inline";
import StyleSheet from "./Components/StyleSheet";
import NameList from "./Components/NameList";
import EventBind from "./Components/EventBind";
import ParentComponents from "./Components/ParentComponents";
import UserGreeting from "./Components/UserGreeting";
import FuctionalComp from "./Components/FuctionalComp";
import ClassComp from "./Components/ClassComp";
import Props from "./Components/Props";
import State from "./Components/State";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";

function App() {
  return (
    <div className="App">
      <UserProvider value="Jack">
        <ComponentA />
      </UserProvider>
      <NewCounteTwo
        render={(count, Increment) => (
          <HoverdCounterTwo
            count={count}
            Increment={Increment}
          ></HoverdCounterTwo>
        )}
      />
      <ClickCounterTwo />
      <HoverdCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "JACK" : "Guest")} />
      <ClickCounter />
      <HoverCounter />
      <Refs />
      <ParentComp />
      <PureComp />
      <Tables />
      <Fragment />
      <LifeCycleA />
      <Form />
      <Inline />
      <StyleSheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponents />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <State />
      <Props name="Bruce" heroname="Batman" />
      <FuctionalComp />
      <ClassComp />
    </div>
  );
}

export default App;
