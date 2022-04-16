import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter"
import React,{useState} from "react"



function App() {
  const [showCounter,setShowCounter] = useState(true)
  return (
    <div className="App">
      <button onClick={()=> setShowCounter(!showCounter)}>
        {showCounter ? "HIDE" : "SHOW"}
      </button>
      {showCounter && <Counter/>}
      
    </div>
  );
}

export default App;
