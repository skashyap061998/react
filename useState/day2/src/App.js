import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import Input from "./components/Input"
import List from "./components/day1/day1"
import Employe from './components/Employe';
import {Todo} from "./components/Todo"


function App() {
  return (
    <div className="App">
      <h1 className="header">Student Form</h1>
      <Input/>
      
      <List/>
      <Employe/>
      <Button/>
      <Todo/>
    </div>
  );
}

export default App;
