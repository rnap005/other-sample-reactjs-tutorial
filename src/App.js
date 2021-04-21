import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hola from './components/Hola'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Button from './components/button/button';
import State from './components/useState-sample/useStateImpl'

function App() {
  return (
    <div className="App">
      <State/>
      {/* <Button label="this is button" /> */}
      {/* <NameList/> */}
      {/* <UserGreetings/> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button> Action</button>
      </Greet>*/}
      {/* <Greet name = "Diana" heroName = "Wonderwoman" /> */}
      {/* <Welcome name = "Bruce" heroName = "Batman" /> */}
      {/* <Welcome name = "Clark" heroName = "Superman" /> */}
      {/* <Welcome name = "Diana" heroName = "Wonderwoman" />  */}
      {/* <Hola /> */}
    </div>
  );
}

export default App;
